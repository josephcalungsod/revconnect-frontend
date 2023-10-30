import { SyntheticEvent, useContext, useEffect, useState } from "react";
import { Post } from "../models/Post"
import { postCommentAPI } from "../service/CommentService";
import { putLikePostAPI } from "../service/PostService";
import { AccountContext } from "../App";
import { Comment } from "../models/Comment";
import { CommentCard } from "./CommentCard";

interface propsInterface{
    post:Post
    refreshPostData: () => void
}

export function PostCard(props:propsInterface){

    const accountContext = useContext(AccountContext);
    const [postLikesInput, setPostLikesInput] = useState(0);

    const [commentInput, setCommentInput] = useState("");

    // const [postId, setPostIdInput] = useState("");
    // const [postAccount, setPostAccountInput] = useState("");
    // const [postImageUrl, setPostImageUrlInput] = useState("");
    // const [postDescription, setPostDescriptionInput] = useState("");
    // const [postComments, setPostCommentsInput] = useState([]);

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
        
        if(props.post.postId !== undefined){        
            postCommentAPI(props.post.postId, newComment)
            .then(response => {
                props.refreshPostData();
         
        })
        console.log("Comment posted.")

        }
    }
    
     

    return (
        <>
        <div className="postCardContainer">
            <img src={props.post.imageUrl}></img>
            <br/>
            {/* Probably will need to be displayed hidden or top 5-10 comments */}
            <h3>{props.post.description}</h3>

            <h6>
                {/* Conditional render like button */}
                
                    {isClicked?
                        (<button onClick={unlikePost}>Unlike</button>)
                        :
                        (<button onClick={likePost}>Like</button>)                        
                    }                        
                        {props.post.numberOfLikes}                        
                        
                
            Post ID: {props.post.postId}
            </h6>

            
            <div>
                Comment: <input value={commentInput} onChange={updateCommentInput}></input>
                
                <button onClick = {addComment}>Submit</button>                
            </div>

            {props.post.comments.map(comment => <CommentCard key={comment.id} comment={comment}></CommentCard>)}
        </div>
        </>
    )
}