import { useState, useEffect } from "react";
import { getAllPostsAPI } from "../service/PostService";
import { CommentCard } from "./CommentCard";
import { Comment } from "../models/Comment";
import { getAllCommentsAPI } from "../service/CommentService";

/**
 * Displays list of all comments for a single post
 * @returns 
 */
export function CommentsList() {
    const [allComments, setAllComments] = useState<Comment[]>([])

    /**
     * Grabs all comments from backend
     */
    useEffect(() => {
        getAllCommentsAPI()
            .then(response => {
                return response.json()
            })
            .then(json => {
                setAllComments(json)
            });
    }, []);

    return (
        <>
            {/* component call for a post by comment id*/}
            {allComments.map(comment => <CommentCard key={comment.id} comment={comment}></CommentCard>)}
        </>
    )
}
    