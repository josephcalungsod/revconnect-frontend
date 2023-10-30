import { SyntheticEvent, useContext, useState } from "react";
import { AccountContext } from "../App";
import { Post } from "../models/Post";
import { postPostAPI } from "../service/PostService";
import './css/Post.css'

export function CreatePostMenu() {
    const accountContext = useContext(AccountContext);

    const [imageUrl, setImageUrlInput] = useState("");
    const [description, setDescriptionInput] = useState("");
    
    function updateImageUrl(event:SyntheticEvent){
        let image = event.target as HTMLTextAreaElement;
            setImageUrlInput(image.value);       
    }

    function updateContentText(event:SyntheticEvent){
        let text = event.target as HTMLTextAreaElement;
            setDescriptionInput(text.value);
        
    }

    function submitPost() {
        console.log("Submitting a new post!")

        const post: Post = {
            account: accountContext.account,
            imageUrl: imageUrl,
            description: description,
            numberOfLikes: 0,
            comments: []
        }

        postPostAPI(post)
            .then(response => {
                console.log(response);
            })
            .catch((response) => console.log("Some error occurred!" + response))
    }

    return (
        <>
        <div className="postContainer">
            <h1>New Post</h1>
            <h4>Create a new post here!! :)</h4>
            
            <label>Image URL:  </label>
            <input name = "imageUrl" value = {imageUrl} onChange = {updateImageUrl}></input>
            
            <label>Description:  </label>
            <input name = "description" value = {description} onChange = {updateContentText}></input>
        
            <button onClick = {submitPost}>Submit</button>
        </div>
        </>
    )
}