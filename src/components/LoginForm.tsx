import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { APILoginCall } from "../service/AccountService";
import { Account } from "../models/Account";
import { AccountContext } from "../App";
import './css/Login.css'

export function LoginForm() {
    const accountContext = useContext(AccountContext);
    const navigate = useNavigate();
    const [accountName, setAccountName] = useState("");
    const [password, setPassword] = useState("");
    const [account, setAccount] = useState<Account>();

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
                console.log(response);
                return response.json()
            })
            .then(account => {
                console.log(account);
                accountContext.setAccount(account);
            })
            .catch((response) => console.log("Some error occurred!" + response))
    }

    function redirectToRegister() {
        navigate("/register");
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