import { Post } from "../models/Post"
import { CommentCard } from "./CommentCard"

interface props{
    post:Post
    refreshPostData: () => void
}
export function AdminPostCard(props:props){
    return (
        <>
        <div>
            <img src={props.post.imageUrl}></img>
            <br/>
            {/* Probably will need to be displayed hidden or top 5-10 comments */}
            {props.post.description}

            <h6>
                Post ID: {props.post.postId}
            </h6>

            {props.post.comments.map(comment => <CommentCard key={comment.id} comment={comment}></CommentCard>)}

            
            <div>
                Disable/Delete logic will go here.
            </div>            
        </div>
        </>
    )
}