import { SyntheticEvent, useContext, useEffect, useState } from "react";
import { Post } from "../models/Post"
import { postCommentAPI } from "../service/CommentService";
import { putLikePostAPI } from "../service/PostService";
import { AccountContext } from "../App";
import { Comment } from "../models/Comment";
import { CommentCard } from "./CommentCard";
import './css/PostCard.css';

interface propsInterface{
    post: Post,
    refreshPostData: () => void
}

export function PostCard(props:propsInterface){
    const accountContext = useContext(AccountContext);
    const [postLikesInput, setPostLikesInput] = useState(0);
    const [commentInput, setCommentInput] = useState("");
    const [isClicked, setIsClicked] = useState(false);

    function updateCommentInput(event:SyntheticEvent){
        let commentBox = event.target as HTMLTextAreaElement;
        setCommentInput(commentBox.value);        

        // 
    }   

    /**
     * Likes button click function
     */
    function likePost(){       
        
        if(props.post.postId !== undefined){
            putLikePostAPI(props.post.postId, 1)
            .then(response => {
                props.refreshPostData();
            })
        }

        // *** no logic to check if post was already liked ***
        setPostLikesInput(props.post.numberOfLikes);

        console.log("Like posted.")
        setIsClicked(!isClicked);
    }
    function unlikePost(){        

        if(props.post.postId !== undefined){
            putLikePostAPI(props.post.postId, -1)
            .then(response => {
                props.refreshPostData();
        })

        // *** no logic to check if post was already liked ***
        setPostLikesInput(props.post.numberOfLikes)
    
        console.log("Unlike posted.");
        setIsClicked(!isClicked);
        }
    }
    

    /**
     * Adds new comment to current post
     */
    function addComment(){
        const newComment:Comment = {            
            account: accountContext.account,
            comment: commentInput
        }
        
        if(props.post.postId === undefined){        
            return;
        }
        // Sends post id and user input input comment to backend        
        postCommentAPI(props.post.postId, newComment)
            .then(response => {
                console.log("Comment posted.");
                setCommentInput("");
                // re-renders view
                props.refreshPostData();
            })
    }
    
     

    return (
        <>
        <div className="postCardContainer">
            {/* Probably should only display hidden or top 5-10 comments */}
            
            {/* Indivivdual post */}
            {props.post.account.accountName}
            <img src={props.post.imageUrl}></img>
            {props.post.account.role}
            <div>
                <p>{props.post.description}</p>
                <br />
                <h6>
               
                     {/* Conditional render like button */}
                
                          {isClicked?
                              (<button onClick={unlikePost}>Unlike</button>)
                             :
                             (<button onClick={likePost}>Like</button>)                        
                         }                        
                             {props.post.numberOfLikes}                        
                    <br />           
                 Post ID: {props.post.postId}
            </h6>
            </div>
            
            <div>
                {/* User input comment box */}
                Comment:<input value={commentInput} onChange={updateCommentInput}></input>
                <button onClick = {addComment}>Submit</button>                
            </div>
                
            {/* Displays all comments attached to post */}
            {props.post.comments.map(comment => <CommentCard key={comment.id} comment={comment}></CommentCard>).reverse()} 
        </div>
        
        </>
    )
}