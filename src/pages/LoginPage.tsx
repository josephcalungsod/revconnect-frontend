import { useContext, useEffect } from "react";
import { LoginForm } from "../components/LoginForm";
import { AccountContext } from "../App";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
    const accountContext = useContext(AccountContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(accountContext.account.accountName !== "") {
            navigate("/");
        }
    }, []);

    return (
        <>
            <LoginForm></LoginForm>
        </>
    )
}