import { Link } from "react-router-dom";
import { AccountContext } from "../App";
import { useContext, useEffect, useState } from "react";
import { Account } from "../models/Account";
import { Role } from "../models/Role";
import { AdminNavbar } from "../NOT-IN-USE/AdminNavbar";

/**
 * Displays Navbar. 
 * Login/Register renders when accountName=null
 * Logout/Post/AllPosts renders when accountName is not null
 * AdminNavBar conditionally rendered when role=ADMIN
 * @returns 
 */
export function Navbar() {
    const accountContext = useContext(AccountContext);
    const [navBarLinks, setNavBarLinks] = useState<JSX.Element | null>(null);

    useEffect(() => {
        if(accountContext.account.accountName === "") {
            setNavBarLinks(
                <>
                    <Link to = "/login">Login</Link>
                    <span> | </span>
                    <Link to = "/register">Register</Link>
                </>
            );
        } else {
            setNavBarLinks(
                <>
                    <Link to = "/logout">Logout</Link>
                    <span> | </span>
                    <Link to = "/post">Post</Link>
                    <span> | </span>
                    <Link to = "/allPosts">AllPosts</Link>
                    {/* <span> | </span> */}
                    {/* <Link to = "/account">Account</Link> */}
                </>
            );
        }

        if(accountContext.account.role === Role.ADMIN) {
            setNavBarLinks(
                <>
                    <Link to = "/logout">Logout</Link>
                    <span> | </span>
                    <Link to = "/admin/accounts">Accounts List</Link>
                    <span> | </span>
                    <Link to = "/admin/posts">Posts List</Link>
                    {/* <span> | </span> */}
                    {/* <Link to = "/account">Account</Link> */}
                </>
            );
        }

        
    }, [accountContext]);

    return (        
            <>        
                {/* <p>CURRENT USER: Username = {accountContext.account.accountName}; Role = {accountContext.account.role}</p> */}
                <div className="Navbar">
                    <Link to = "/">Home</Link>
                    <span> | </span>
                    {navBarLinks}
                </div>
            </>
    )
    
    
}

