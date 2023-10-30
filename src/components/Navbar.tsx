import { Link } from "react-router-dom";
import { AccountContext } from "../App";
import { useContext, useEffect, useState } from "react";
import { Account } from "../models/Account";
import { Role } from "../models/Role";
import { AdminNavbar } from "./AdminNavbar";

export function Navbar() {
    const accountContext = useContext(AccountContext);

    return (        
            <>        
                <p>CURRENT USER: Username = {accountContext.account.accountName}; Role = {accountContext.account.role}</p>
                <div className="Navbar">
                    <Link to = "/">Home</Link>
                    <span> | </span>
                    <Link to = "/login">Login</Link>
                    <span> | </span>
                    <Link to = "/logout">Logout</Link>
                    <span> | </span>
                    <Link to = "/register">Register</Link>
                    <span> | </span>
                    <Link to = "/post">Post</Link>
                    <span> | </span>
                    <Link to = "/allPosts">AllPosts</Link>    
                </div>
                {accountContext.account.role === Role.ADMIN ? <AdminNavbar></AdminNavbar> : <></>}
            </>
    )
    
    
}

