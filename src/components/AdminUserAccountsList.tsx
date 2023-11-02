import { useState, useEffect } from "react";
import { Account } from "../models/Account";
import { getAllAccountsAPI } from "../service/AccountService";
import { AdminUserAccountCard } from "./AdminUserAccountCard";

/**
 * Admin view of User Accounts List
 * @returns 
 */
export function AdminUserAccountsList(){
    const [allAccounts, setAllAccounts] = useState<Account[]>([])

    // re-renders after each account added to view
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
            {/* Displays all individual accounts */}
            {allAccounts.map(account => <AdminUserAccountCard refreshAccountData={refreshAccountData} account={account} key={account.accountId}></AdminUserAccountCard>)}
            
        </>
    )
}