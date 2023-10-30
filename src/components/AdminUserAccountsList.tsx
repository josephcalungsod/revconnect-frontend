import { useState, useEffect } from "react";
import { Account } from "../models/Account";
import { getAllAccountsAPI } from "../service/AccountService";
import { AdminUserAccountCard } from "./AdminUserAccountCard";

export function AdminUserAccountsList(){
    const [allAccounts, setAllAccounts] = useState<Account[]>([])

    function refreshPostData(){
        getAllAccountsAPI()
            .then(response => {
                return response.json()
            })
            .then(json => {
                setAllAccounts(json)
            });

    }

    useEffect(() => {
        refreshPostData();
    }, []);

    return (
        <>
        <h4>All Accounts</h4>
            {allAccounts.map(account => <AdminUserAccountCard account={account} key={account.accountId}></AdminUserAccountCard>)}
            
        </>
    )
}