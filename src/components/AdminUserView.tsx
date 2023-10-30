import { SyntheticEvent, useContext, useState } from "react";
import { AccountContext } from "../App";
import { Account } from "../models/Account";
import { Role } from "../models/Role";
import { putRoleAPI } from "../service/AccountService";


interface props{
    account:Account    
    
}

export function AdminUserView(props:props){

    const accountContext = useContext(AccountContext)

    // disable user = PUT request

    // delete user = DELETE request
    
    // reset password = PUT request    

    // change roles  = PUT request
    
    const [role, setRole] = useState("");   

    function updateRoleInput(event:SyntheticEvent){
        // let roleInputBox = event.target as HTML
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
        <h1>Users View</h1>
        <div>
            account id for user whose role is changing

            Role: <select value={role} onChange={updateRoleInput}>
                        <option value={Role.PERSONAL}>{Role.PERSONAL}</option>
                        <option value={Role.CREATOR}>{Role.CREATOR}</option>
                        <option value={Role.BUSINESS}>{Role.BUSINESS}</option>
                        <option value={Role.ADMIN}>{Role.ADMIN}</option>
                    </select>
        </div>
        </>
    )
}


