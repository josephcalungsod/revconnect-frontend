import { useContext, useEffect } from "react";
import { RegisterForm } from "../components/RegisterForm";
import { AccountContext } from "../App";
import { useNavigate } from "react-router-dom";

export function RegisterPage() {
    const accountContext = useContext(AccountContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(accountContext.account.accountName !== "") {
            navigate("/");
        }
    }, []);

    return (
        <>
            <RegisterForm></RegisterForm>
        </>
    )
}