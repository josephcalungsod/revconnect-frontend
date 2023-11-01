import { Account } from "../models/Account";
import { Post } from "../models/Post";


/**
 * POSTs a new social media post
 * @param post 
 * @returns 
 */
 export async function postPostAPI(post:Post){
    return await fetch(
        "https://revconnect-backend.azurewebsites.net/post",
        {
            mode:"cors",
            method:"POST",
            body:JSON.stringify(post),
            headers:
            {
                "access-control-allow-origin":"*",
                "access-control-allow-headers":"GET, POST, OPTIONS",
                "content-type":"application/json"
                
            }
        })
}
/**
 * PUTs a like on a social media post
 * @param post 
 * @returns 
 */
export async function putLikePostAPI(id: number, numberOfLikes: number){
    return await fetch(
        `https://revconnect-backend.azurewebsites.net/post/${id}/${numberOfLikes}`,
        {
            mode:"cors",
            method:"PUT",            
            headers:
            {
                "access-control-allow-origin":"*",
                "access-control-allow-headers":"GET, POST, PUT, OPTIONS",
                "content-type":"application/json"
            }
        })
}
/**
 * GETs all posts
 * @returns 
 */
 export async function getAllPostsAPI(){

    return await fetch(
        "https://revconnect-backend.azurewebsites.net/post",
        {
            mode:"cors",
            method:"GET",
            headers:
            {
                "access-control-allow-origin":"*",
                "access-control-allow-headers":"GET, POST, OPTIONS",
                "content-type":"application/json"
            }
        })
    }

    export async function deletePostAPI(post:Post, account:Account){
        return await fetch(
            "https://revconnect-backend.azurewebsites.net/post",
            {
                mode:"cors",
                method:"DELETE",
                body:JSON.stringify(post),
                headers:
                {
                    "access-control-allow-origin":"*",
                    "access-control-allow-headers":"GET, POST, DELETE, OPTIONS",
                    "content-type":"application/json",
                    "account-name": account.accountName,
                    "password": account.password
                }
            })
    }
        


