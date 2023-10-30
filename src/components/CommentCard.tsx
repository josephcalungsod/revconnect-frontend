import { ChangeEvent, SyntheticEvent, useState } from "react";
import { Comment } from "../models/Comment";

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
            <div>                
                <h6>Account: {props.comment.account.accountName}</h6> {/* displays Account name */}
                <p>{props.comment.comment}</p> {/* displays comment*/}
            </div>
        </>
    )
}
