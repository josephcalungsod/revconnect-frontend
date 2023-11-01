import { useContext, useEffect } from "react";
import { AccountContext } from "../App";
import { Account } from "../models/Account";
import { Role } from "../models/Role";

export function LogoutPage() {
    const accountContext = useContext(AccountContext);

    useEffect(() => {
        if(accountContext.account.accountName != null) {
            const account: Account = {
                accountId: -1,
                accountName: "",
                password: "",
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
                role: Role.PERSONAL,
                isDisabled: false
            }
    
            accountContext.setAccount(account);
        }
    }, [])

    return (
        <>
            <br />
            <br />
            <br />
            <br />
           <h1>You've been Logged Out</h1> 
        </>
    )

}