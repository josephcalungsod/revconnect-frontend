import { Post } from "../models/Post"
import { deletePostAPI } from "../service/PostService"
import { CommentCard } from "./CommentCard"

interface Props {
    post: Post,
    refreshPostData: () => void
}

export function AdminPostCard(props: Props){
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
        <div className="postCardContainer">
            {props.post.account.role}
            <img src={props.post.imageUrl} alt=""></img>
            <br/>
            {/* Probably will need to be displayed hidden or top 5-10 comments */}
            {props.post.description}

            <h6>
                Post ID: {props.post.postId}
            </h6>

            {props.post.comments.map(comment => <CommentCard key={comment.id} comment={comment}></CommentCard>)}

            
            <div>
                
                <button onClick={deletePost}><text style={{ color: 'red' }}>DELETE</text></button>
            </div>            
        </div>
        </>
    )
}