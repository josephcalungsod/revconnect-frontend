import { AdminPostCard } from "./AdminPostCard";
import { Post } from "../models/Post";
import { useEffect, useState } from "react";
import { PostCard } from "./PostCard";
import { getAllPostsAPI } from "../service/PostService";

/**
 * 
 * @returns 
 */
export function AdminPostsList(){
    
    const [allPosts, setAllPosts] = useState<Post[]>([])

    // re-render logic
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
            <h1>RevConnect</h1>
            <h3>Where innovation meets Connectivity!!</h3>
            <div>
                <h2>All Posts</h2>
                <h4>---You are currently in the Adminitrator View ---</h4>
            </div>
            <div>
                {/* Displays all posts */}
                {allPosts.map(post => <AdminPostCard refreshPostData={refreshPostData} post={post} key={post.postId}></AdminPostCard>)}
            </div>
        </>
    )
}