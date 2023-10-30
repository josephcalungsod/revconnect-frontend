import { useState, useEffect } from "react";
import { Account } from "../models/Account";
import { getAllAccountsAPI } from "../service/AccountService";
import { AdminUserAccountCard } from "./AdminUserAccountCard";

export function AdminUserAccountsList(){
    const [allAccounts, setAllAccounts] = useState<Account[]>([])

    function refreshAccountData(){
        getAllAccountsAPI()
            .then(response => {
                return response.json()
            })
            .then(json => {
                setAllAccounts(json)
            });

    }

    useEffect(() => {
        refreshAccountData();
    }, []);

    return (
        <>
        <h4>All Accounts</h4>
            {allAccounts.map(account => <AdminUserAccountCard refreshAccountData={refreshAccountData} account={account} key={account.accountId}></AdminUserAccountCard>)}
            
        </>
    )
}