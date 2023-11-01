import { useContext, useEffect } from "react";
import { PostsList } from "../components/PostsList";
import { AccountContext } from "../App";
import { useNavigate } from "react-router-dom";


export function PostsPage(){
    const accountContext = useContext(AccountContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(accountContext.account.accountName === "") {
            navigate("/");
        }
    }, []);

    return (
        <div >
        <h1>RevConnect</h1>
        <h2>Where Innovation Meets Connectivity!!</h2>

        <PostsList/>
        </div>
    )

}