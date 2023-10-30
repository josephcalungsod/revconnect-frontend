import { Link } from "react-router-dom";
import { AccountContext } from "../App";
import { useContext, useEffect, useState } from "react";
import { Account } from "../models/Account";
import { Role } from "../models/Role";

// interface props{
//     account:Account
//     role:Role
// }

export function AdminNavbar() {
    const accountContext = useContext(AccountContext);

    const [isAdmin, setIsAdmin] = useState(false);
    
    if(accountContext.account.role === Role.ADMIN){
        setIsAdmin(true);
    }    

    return (        
            <>  
                <div className="AdminNavbar">
                    <Link to = "/admin/adminPage">Home</Link>
                    <span> | </span>
                    <Link to = "/admin/accounts">Accounts List</Link>
                    <span> | </span>
                    <Link to = "/admin/posts">Posts List</Link>
                    
                    
                </div>
            </>
    )
    
    
}

