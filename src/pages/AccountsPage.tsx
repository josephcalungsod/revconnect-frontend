import { useContext, useEffect } from "react";
import { AdminUserAccountsList } from "../components/AdminUserAccountsList";
import { AccountContext } from "../App";
import { useNavigate } from "react-router-dom";
import { Role } from "../models/Role";

export function AccountsPage() {
    const accountContext = useContext(AccountContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(accountContext.account.role !== Role.ADMIN) {
            navigate("/");
        }
    }, []);

    return (
        <>
            <AdminUserAccountsList></AdminUserAccountsList>
        </>
    )
}