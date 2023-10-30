import { ChangeEvent, useState } from "react";
import { APIRegisterCall } from "../service/AccountService";
import { Account } from "../models/Account";
import { Role } from "../models/Role";
import { useNavigate } from "react-router-dom";
import './css/Register.css'

export function RegisterForm() {
    const navigate = useNavigate();
    const [accountName, setAccountName] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const updateInput = (synthEvent: ChangeEvent<HTMLInputElement>) => {
        switch(synthEvent.target.name) {
            case "accountName":
                setAccountName(synthEvent.target.value);
                break;
            case "password":
                setPassword(synthEvent.target.value);
                break;
            case "firstName":
                setFirstName(synthEvent.target.value);
                break;
            case "lastName":
                setLastName(synthEvent.target.value);
                break;
            case "email":
                setEmail(synthEvent.target.value);
                break;
            case "phoneNumber":
                setPhoneNumber(synthEvent.target.value);
                break;
        }
    }

    function register() {
        console.log("Attempting to register!");

        const account: Account = {
            accountName: accountName,
            password: password,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            role: Role.PERSONAL,
            isDisabled: false
        }

        APIRegisterCall(account)
            .then(response => {
                navigate("/login")
            })
            .catch((response) => console.log("ERROR: " + response))
    }


    return (
        <>
            <div className="registerContainer">
                <h1>----- REGISTRATION -----</h1>
                <label>Account Name:</label>
                <input name = "accountName" value = {accountName} onChange = {updateInput}></input>
                 
                <label>Password:</label>
                <input name = "password" type = "password" value = {password} onChange = {updateInput}></input>

                <label>First Name:</label>
                <input name = "firstName" value = {firstName} onChange = {updateInput}></input>

                <label>Last Name:</label>
                <input name = "lastName" value = {lastName} onChange = {updateInput}></input>

                <label>Email:</label>
                <input name = "email" value = {email} onChange = {updateInput}></input>

                <label>Phone Number:</label>
                <input name = "phoneNumber" value = {phoneNumber} onChange = {updateInput}></input>

                <button onClick = {register}>Register</button>
            </div>
        </>
    )
} 