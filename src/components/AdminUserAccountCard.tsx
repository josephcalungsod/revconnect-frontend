import { ChangeEvent, SyntheticEvent, useContext, useState } from "react";
import { Account } from "../models/Account"
import { Role } from "../models/Role"
import { APIUpdateAccountPasswordCall, APIUpdateAccountRoleCall, deleteAccountAPI } from "../service/AccountService";
import { AccountContext } from "../App";

interface props {
    account: Account,
    refreshAccountData: () => void
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
            props.refreshAccountData();
        })
        .catch(res => {
            console.log(res);
            console.log("Something went wrong!");
        })
    }

    /**
     * Update role of displayed user account via PUT request to backend
     */
    function submitNewRole() {
        if(props.account.accountId === undefined){
            return;
        }

        APIUpdateAccountRoleCall(props.account.accountId, role, accountContext.account)
        .then(res => {
            console.log(res);
            console.log("Role changed!");
            props.refreshAccountData();
        })
        .catch(res => {
            console.log(res);
            console.log("Something went wrong!");
        })
    }

    /**
     * Delete Account logic
     * @returns 
     */
    function deleteAccount(){
        if(props.account.accountId === undefined){
            return;
        }
        // Sends account Id and logged in user info to backend
        deleteAccountAPI(props.account.accountId, accountContext.account)
        .then(res =>{
            console.log(res.status);
            props.refreshAccountData();
        })
        .catch(res =>{
            console.log(res);
        })
        console.log("Deleted account, accountId: " + props.account.accountId)
    
    }

    // const [isChecked, setIsChecked] = useState(false);

    // function disableAccount() {
    //     setIsChecked(!isChecked);
    //     console.log(isChecked)
    //     disable();
    // };

    // function disable() {
    //     if (isChecked) {
    //         if(props.account.accountId === undefined){
    //             return;
    //         }                    
    //     APIUpdateAccountIsDisabledCall(props.account.accountId, accountContext.account);
            
    //     }
    // };
    
    return (
        <>
            <div className="postCardContainer">                
                <h6>Account ID: {props.account.accountId}</h6> 
                
                <h6>Username: {props.account.accountName}</h6> 
                
                <h6>
                    Current Password: {props.account.password}
                    <input type="text" name="password" value={password} onChange={updatePasswordInput}></input>
                    <button onClick={submitNewPassword}>Change</button>                    
                </h6> 
                
                <h6>First Name: {props.account.firstName}</h6> 
                
                <h6>Last Name: {props.account.lastName}</h6> 
                
                <h6>Email: {props.account.email}</h6> 
                                
                <h6>Phone Number: {props.account.phoneNumber}</h6> 
                
                <h6>
                    Role: {props.account.role}
                    <select value={role} onChange={handleRoleChange}>
                        <option value={Role.CREATOR}>{Role.CREATOR}</option>
                        <option value={Role.PERSONAL}>{Role.PERSONAL}</option>
                        <option value={Role.BUSINESS}>{Role.BUSINESS}</option>
                        <option value={Role.ADMIN}>{Role.ADMIN}</option>
                    </select>                     
                    <button onClick={submitNewRole}>Change</button> 
                </h6>
                <button onClick={deleteAccount}><text style={{ color: 'red' }}>DELETE</text></button>
                
                {/* <label>Disable: </label> */}
                    {/* <input type="checkbox" onChange={disableAccount} checked={isChecked} /> */}
                
                
            </div>
        </>
    )
}