import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { APILoginCall } from "../service/AccountService";
import { AccountContext } from "../App";
import './css/Login.css'
import { Role } from "../models/Role";

/**
 * Login Form component.
 * User inputs username/password to log in.
 * @returns 
 */
export function LoginForm() {
    const accountContext = useContext(AccountContext);
    const navigate = useNavigate(); 
    const [accountName, setAccountName] = useState("");
    const [password, setPassword] = useState("");

    // sets username/password to be sent to backend
    const updateInput = (synthEvent: ChangeEvent<HTMLInputElement>) => {
        switch(synthEvent.target.name) {
            case "accountName":
                setAccountName(synthEvent.target.value);
                break;
            case "password":
                setPassword(synthEvent.target.value);
                break;
        }
    }

    function login() {
        console.log("Attempting to login!");

        APILoginCall(accountName, password)
            .then(response => {
                console.log(response.body);
                return response.json();
            })
            .then(account => {
                console.log(account);
                accountContext.setAccount(account);

                if(account.role !== Role.ADMIN) {
                    navigate("/allPosts"); // redirects to all posts page
                } else {
                    navigate("/"); // redirects to default home page
                }                
            })
            .catch((response) => {
                console.log("Some error occurred!" + response)
                alert("Wrong creditials! Please try again.");
            })
    }

    function redirectToRegister() {
        navigate("/register"); // redirects to register page
    }

    return (
        <>
            <div className="loginContainer">
                <h1>----- LOGIN -----</h1>
                <label>Account Name:</label>
                <input name = "accountName" value = {accountName} onChange = {updateInput}></input>
                 
                <label>Password:</label>
                <input name = "password" type = "password" value = {password} onChange = {updateInput}></input>

                <button onClick = {login}>Login</button>
                <button onClick = {redirectToRegister}>Create an account</button>

            </div>
        </>
    )
} 