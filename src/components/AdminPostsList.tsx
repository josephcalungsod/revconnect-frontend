import { AdminPostCard } from "./AdminPostCard";
import { Post } from "../models/Post";
import { useEffect, useState } from "react";
import { PostCard } from "./PostCard";
import { getAllPostsAPI } from "../service/PostService";

export function AdminPostsList(){
    
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
        <>
        <h1>All posts Admin view</h1>
        <div>                
        {allPosts.map(post => <AdminPostCard refreshPostData={refreshPostData} post={post} key={post.postId}></AdminPostCard>)}
        </div>
    
        </>
    )
}