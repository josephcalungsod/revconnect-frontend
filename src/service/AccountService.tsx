import { Account } from "../models/Account";
import { Role } from "../models/Role";

export async function APILoginCall(accountName: string, password: string) {
    return await fetch (
        "https://revconnect-backend.azurewebsites.net/account/login",
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
        "https://revconnect-backend.azurewebsites.net/account/register",
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

export async function APIUpdateAccountRoleCall(accountId: number, role: Role, account: Account) {
    return await fetch (
        `https://revconnect-backend.azurewebsites.net/account/${accountId}/`,
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

//disable
// export async function APIUpdateAccountIsDisabledCall(accountId: number, account: Account) {
//     return await fetch (
//         `https://revconnect-backend.azurewebsites.net/account/${accountId}/disable`,
//         {
//             mode: "cors",
//             method: "PUT",            
//             headers: {
//                 "access-control-allow-origin": "*",
//                 "access-control-allow-headers": "GET, POST, PUT, OPTIONS",
//                 "content-type": "application/json",
//                // body: JSON.stringify({accountId}),
//                 "account-name": account.accountName,
//                 "password": account.password
//             }
//         }
//     )
// }

export async function APIUpdateAccountPasswordCall(accountId: number, password: string, account: Account) {
    return await fetch (
        `https://revconnect-backend.azurewebsites.net/account/${accountId}/`,
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
        "https://revconnect-backend.azurewebsites.net/account",
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
// export async function deleteAccountAPI(accountId: number, userAccount: Account, account: Account) {
//     return await fetch (
//         `https://revconnect-backend.azurewebsites.net/account/${accountId}/`,
//         {
//             mode: "cors",
//             method: "PUT",
//             body: JSON.stringify({account: userAccount}),
//             headers: {
//                 "access-control-allow-origin": "*",
//                 "access-control-allow-headers": "GET, POST, PUT, OPTIONS",
//                 "content-type": "application/json",
//                 "account-name": account.accountName,
//                 "password": account.password
//             }
//         }
//     )
// }