import { Post } from "../models/Post"
import { CommentCard } from "./CommentCard";
import './css/AdminPostCard.css';

interface props{
    post:Post
    refreshPostData: () => void
}
export function AdminPostCard(props:props){
    return (
        <>
        <div className="adminPostContainer">
            <img src={props.post.imageUrl}></img>
            <br/>
            {/* Probably will need to be displayed hidden or top 5-10 comments */}
            <p style={{margin:"-5px"}}>Description: {props.post.description}</p>
            <p>Post ID: {props.post.postId}</p>

            {props.post.comments.map(comment => <CommentCard key={comment.id} comment={comment}></CommentCard>)}

            
            <div>
                Disable/Delete logic will go here.
            </div>            
        </div>
        </>
    )
}