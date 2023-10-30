import { SyntheticEvent, useContext, useState } from "react";
import { Account } from "../models/Account"
import { Role } from "../models/Role"
import { putRoleAPI } from "../service/AccountService";
import { AccountContext } from "../App";

interface props {
    account: Account
}

export function AdminUserAccountCard(props: props) {

    const accountContext = useContext(AccountContext)

    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");

    /**
     * Update password of displayed user account via PUT request to backend
     * @param event 
     */
    function updateNewPasswordInput(event:SyntheticEvent){
        // let inputPassword = (event.target as HTMLTextAreaElement).value
        let inputPassword = event.target as HTMLTextAreaElement;
        setPassword(inputPassword.value);
    }
    function changePassword(){
        
        if(props.account.accountId !== undefined){
            
            // putPasswordAPI(props.account.accountId, password, accountContext.account) // AccountService method call w/ params: ..(accountId, newPassword, logged in user context)
            // .then(response => {
            //     props.refreshRoleData(); // refresh. do we even need?
            // })
            // console.log("Password changed.")
        }
    }

    /**
     * Update role of displayed user account via PUT request to backend
     * @param event 
     */
    function updateRoleInput(event:SyntheticEvent){        
        const newRole = (event.target as HTMLSelectElement).value
        setRole(newRole);  
    

        // PUT method service call goes here w/ role passed in
        if(props.account.accountId !== undefined){
            
            putRoleAPI(props.account.accountId, role, accountContext.account) // AccountService method call w/ params: ..(accountId, role, logged in user context)
            // .then(response => {
            //     props.refreshRoleData(); // refresh. do we even need?
            // })
            console.log("Role set to: " + props.account.role)
        }
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
                    <input type="text" value={password} onChange={updateNewPasswordInput}></input>
                    <button onClick={updateNewPasswordInput}>Change</button>                    
                </h6> 
                
                <h6>First Name: {props.account.firstName}</h6> 
                
                <h6>Last Name: {props.account.lastName}</h6> 
                
                <h6>Email: {props.account.email}</h6> 
                                
                <h6>Phone Number: {props.account.phoneNumber}</h6> 
                
                <h6>
                    Role: {props.account.role}
                    <br/>
                    <span> Change to: </span>
                    <select value={role}>
                        <option value={Role.PERSONAL}>PERSONAL</option>
                        <option value={Role.CREATOR}>CREATOR</option>
                        <option value={Role.BUSINESS}>BUSINESS</option>
                        <option value={Role.ADMIN}>ADMIN</option>
                    </select>
                    <button onClick={updateRoleInput}>Change</button> 
                </h6>
            </div>
            
            
            
        </>
    )
}

// accountId?: number,
// accountName: string,
// password: string,
// firstName: string,
// lastName: string,
// email: string,
// phoneNumber: string,
// role: Role