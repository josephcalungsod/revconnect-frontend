import { Account } from "./Account";
import { Comment } from "../models/Comment"

export interface Post {
    postId?: number,
    account: Account,
    imageUrl: string,
    description: string,
    numberOfLikes: number,
    comments: Comment[]
}