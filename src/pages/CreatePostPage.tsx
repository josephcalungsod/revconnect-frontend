import { useContext, useEffect } from "react";
import { CreatePostMenu } from "../components/CreatePostMenu";
import { AccountContext } from "../App";
import { useNavigate } from "react-router-dom";

export function CreatePostPage(){
    const accountContext = useContext(AccountContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(accountContext.account.accountName === "") {
            navigate("/");
        }
    }, []);

    return (
        <>
            <CreatePostMenu/>
        </>
    )
}