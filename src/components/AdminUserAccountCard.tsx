import { ChangeEvent, SyntheticEvent, useContext, useState } from "react";
import { Account } from "../models/Account"
import { Role } from "../models/Role"
import { APIUpdateAccountPasswordCall, APIUpdateAccountRoleCall } from "../service/AccountService";
import { AccountContext } from "../App";

interface props {
    account: Account
}

export function AdminUserAccountCard(props: props) {
    const accountContext = useContext(AccountContext)
    const [role, setRole] = useState<Role>(props.account.role)
    const [password, setPassword] = useState(props.account.password);

    /**
     * Update password of displayed user account via PUT request to backend
     * @param event 
     */
    const updatePasswordInput = (synthEvent: ChangeEvent<HTMLInputElement>) => {
        switch(synthEvent.target.name) {
            case "password":
                setPassword(synthEvent.target.value);
                break;
        }
    }

    function handleRoleChange(event: ChangeEvent<HTMLSelectElement>): void {
        setRole(event.target.value as Role);
    }

    function submitNewPassword() {
        if(props.account.accountId === undefined){
            return;
        }

        APIUpdateAccountPasswordCall(props.account.accountId, password, accountContext.account)
        .then(res => {
            console.log(res);
            console.log("Password changed!");
        })
        .catch(res => {
            console.log(res);
            console.log("Something went wrong!");
        })

        // putPasswordAPI(props.account.accountId, password, accountContext.account) // AccountService method call w/ params: ..(accountId, newPassword, logged in user context)
        // .then(response => {
        //     props.refreshRoleData(); // refresh. do we even need?
        // })
        // console.log("Password changed.")
    }

    function submitNewRole() {
        if(props.account.accountId === undefined){
            return;
        }

        APIUpdateAccountRoleCall(props.account.accountId, role, accountContext.account)
        .then(res => {
            console.log(res);
            console.log("Role changed!");
        })
        .catch(res => {
            console.log(res);
            console.log("Something went wrong!");
        })
    }
    
    /**
     * Update role of displayed user account via PUT request to backend
     * @param event 
     */
    function updateRoleInput(event:SyntheticEvent){        
        /*
        const newRole = (event.target as HTMLSelectElement).value
        setRole(newRole);  
    

        // PUT method service call goes here w/ role passed in
        if(props.account.accountId !== undefined){
            
            APIUpdateAccountRoleCall(props.account.accountId, role, accountContext.account) // AccountService method call w/ params: ..(accountId, role, logged in user context)
            // .then(response => {
            //     props.refreshRoleData(); // refresh. do we even need?
            // })
            console.log("Role set to: " + props.account.role)
        }
        */
    }
    
    return (
        <>
            <div>                
                <h6>Account ID: {props.account.accountId}</h6> 
                
                <h6>Username: {props.account.accountName}</h6> 
                
                <h6>
                    Password: {"**********"}
                    <br/>
                    <span> Change to: </span>
                    <input type="text" name="password" value={password} onChange={updatePasswordInput}></input>
                    <button onClick={submitNewPassword}>Change</button>                    
                </h6> 
                
                <h6>First Name: {props.account.firstName}</h6> 
                
                <h6>Last Name: {props.account.lastName}</h6> 
                
                <h6>Email: {props.account.email}</h6> 
                                
                <h6>Phone Number: {props.account.phoneNumber}</h6> 
                
                <h6>
                    Role: {props.account.role}
                    <br/>
                    <span> Change to: </span>
                    <select value={role} onChange={handleRoleChange}>
                        <option value={Role.CREATOR}>{Role.CREATOR}</option>
                        <option value={Role.PERSONAL}>{Role.PERSONAL}</option>
                        <option value={Role.BUSINESS}>{Role.BUSINESS}</option>
                        <option value={Role.ADMIN}>{Role.ADMIN}</option>
                    </select> 
                    <button onClick={submitNewRole}>Change</button> 
                </h6>
            </div>
        </>
    )
}