import { useContext, useEffect, useState } from "react"
import { AccountContext } from "../App"
import { useParams } from "react-router-dom";
import { getAccountByAccountNameAPI } from "../service/AccountService";
import { Account } from "../models/Account";

export function AccountPage() {
    const accountContext = useContext(AccountContext);
    let { accountName } = useParams();
    const [account, setAccount] = useState<Account>();
    
    useEffect(() => {
        if(accountName === undefined) {
            return;
        }

        getAccountByAccountNameAPI(accountName)
        .then(response => {
            return response.json();
        })
        .then(account => {
            setAccount(account);
        })
        .catch(response => {
            console.log(response);
        })
    }, []);

    return (
        <>
            <h1>Account Information:</h1>
            {account !== undefined ? <>
            <p>Account Name: {account.accountName}</p>
            <p>First Name: {account.firstName}</p>
            <p>Last Name: {account.lastName}</p>
            <p>Email: {account.email}</p>
            <p>Phone Number: {account.phoneNumber}</p>
            </> : <></>}
        </>
    )
}