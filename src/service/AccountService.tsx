import { Account } from "../models/Account";
import { Role } from "../models/Role";

export async function APILoginCall(accountName: string, password: string) {
    return await fetch (
        "http://localhost:8080/account/login",
        {
            mode: "cors",
            method: "POST",
            body: JSON.stringify({
                accountName: accountName,
                password: password
            }),
            headers: {
                "access-control-allow-origin": "*",
                "access-control-allow-headers": "GET, POST, OPTIONS",
                "content-type": "application/json"
            }
        }
    )
}

export async function APIRegisterCall(account: Account) {
    return await fetch (
        "http://localhost:8080/account/register",
        {
            mode: "cors",
            method: "POST",
            body: JSON.stringify(account),
            headers: {
                "access-control-allow-origin": "*",
                "access-control-allow-headers": "GET, POST, OPTIONS",
                "content-type": "application/json"
            }
        }
    )
}

export async function putRoleAPI(id:number, role:string, account:Account) {
    return await fetch (
        "http://localhost:8080/account/{id}/",
        {
            mode: "cors",
            method: "PUT",
            body: JSON.stringify({role:Role}),
            headers: {
                "access-control-allow-origin": "*",
                "access-control-allow-headers": "GET, POST, PUT, OPTIONS",
                "content-type": "application/json",
                "account-name": account.accountName,
                "password": account.password
            }
        }
    )
}

/**
 * Admin functionality to view all accounts in AdminUserAccountsList.tsx
 * @returns 
 */
export async function getAllAccountsAPI() {
    return await fetch (
        "http://localhost:8080/account",
        {
            mode: "cors",
            method: "GET",
            headers: {
                "access-control-allow-origin": "*",
                "access-control-allow-headers": "GET, POST, OPTIONS",
                "content-type": "application/json"
            }
        }
    )
}