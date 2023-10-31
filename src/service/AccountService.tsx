import { Account } from "../models/Account";
import { Role } from "../models/Role";

export async function APILoginCall(accountName: string, password: string) {
    return await fetch (
        "revconnect-backend.azurewebsites.net/account/login",
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
        "revconnect-backend.azurewebsites.net/account/register",
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

export async function APIUpdateAccountRoleCall(accountId: number, role: string, account: Account) {
    return await fetch (
        `revconnect-backend.azurewebsites.net/account/${accountId}/`,
        {
            mode: "cors",
            method: "PUT",
            body: JSON.stringify({role: role}),
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

export async function APIUpdateAccountPasswordCall(accountId: number, password: string, account: Account) {
    return await fetch (
        `revconnect-backend.azurewebsites.net/account/${accountId}/`,
        {
            mode: "cors",
            method: "PUT",
            body: JSON.stringify({password: password}),
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
        "revconnect-backend.azurewebsites.net/account",
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