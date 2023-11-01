import { ChangeEvent, SyntheticEvent, useState } from "react";
import { Comment } from "../models/Comment";
import './css/CommentCard.css'
/**
 * Provides Comment model from /src/models/Comment.tsx
 */
interface propsInterface {
    comment: Comment
}

/**
 * Displays individual comment of a specific post
 * @param props passes Comment object
 * @returns 
 */
export function CommentCard(props: propsInterface) {
    return (
        <>
            <div className="commentCardContainer">                
                <h4>Username: {props.comment.account.accountName}</h4> {/* displays Account name */}
                <p>Comment: {props.comment.comment}</p> {/* displays comment*/}
            </div>
        </>
    )
}
