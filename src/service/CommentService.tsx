import { Post } from "../models/Post";
import { Comment } from "../models/Comment";




/**
 * POSTs a new social media post
 * @param post 
 * @returns 
 */
export async function postCommentAPI(id:number, comment:Comment){
    return await fetch(
        `http://localhost:8080/post/${id}/comment`,
        {
            mode:"cors",
            method:"POST",
            body:JSON.stringify(comment),
            headers:
            {
                "access-control-allow-origin":"*",
                "access-control-allow-headers":"GET, POST, OPTIONS",
                "content-type":"application/json"
            }
        })
}

/**
 * GETs all comments
 * @returns 
 */
 export async function getAllCommentsAPI(){

    return await fetch(
        "http://localhost:8080/comments",
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
        


