import { useState, useEffect } from "react";
import { Post } from "../models/Post";
import { PostCard } from "./PostCard";
import { getAllPostsAPI } from "../service/PostService";

export function PostsList(){
    const [allPosts, setAllPosts] = useState<Post[]>([])

    function refreshPostData(){
        getAllPostsAPI()
            .then(response => {
                return response.json()
            })
            .then(json => {
                setAllPosts(json)
            });

    }

    useEffect(() => {
        refreshPostData();
    }, []);

    return (
        <div>
            {allPosts.map(post => <PostCard refreshPostData={refreshPostData} post={post} key={post.postId}></PostCard>)}
        </div>
    )
}