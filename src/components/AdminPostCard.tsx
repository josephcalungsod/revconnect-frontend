import { Post } from "../models/Post"
import { deletePostAPI } from "../service/PostService";
import { CommentCard } from "./CommentCard";
import './css/AdminPostCard.css';

interface Props {
    post: Post,
    refreshPostData: () => void // re-renders after post deleted.
}

/**
 * Admin Posts Card component. Displays a list of all posts with the ability to 
 * @param props 
 * @returns 
 */
export function AdminPostCard(props: Props){
    // delete post logic
    function deletePost() {
        deletePostAPI(props.post, props.post.account)
            .then(response => {
                console.log(response);
                console.log("Deleted post, postId: " + props.post.postId);
                console.log(props.post);
                props.refreshPostData(); 
            })
    }
    
    return (
        <>
        <div className="adminPostContainer">
            {props.post.account.accountName}
            <img src={props.post.imageUrl}></img>
            {props.post.account.role}
            <br/>
            {/* Probably will need to be displayed hidden or top 5-10 comments */}
            <p style={{margin:"-5px"}}>Description: {props.post.description}</p>
            <p>Post ID: {props.post.postId}</p>

            {props.post.comments.map(comment => <CommentCard key={comment.id} comment={comment}></CommentCard>)}

            
            <div>
                
                <button onClick={deletePost}><text style={{ color: 'red' }}>DELETE</text></button>
            </div>            
        </div>
        </>
    )
}