import { Post } from "../models/Post"
import { CommentCard } from "./CommentCard";
import './css/AdminPostCard.css';

interface props{
    post:Post
    refreshPostData: () => void
}





export function AdminPostCard(props:props){

    function deletePost(){
        deletePostAPI(props.post, props.post.account);
        console.log("Deleted post, postId: " + props.post.postId)
        console.log(props.post)
        props.refreshPostData();
    
    }
    
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
                
                <button onClick={deletePost}><text style={{ color: 'red' }}>DELETE</text></button>
            </div>            
        </div>
        </>
    )
}