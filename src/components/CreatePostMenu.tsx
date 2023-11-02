import { SyntheticEvent, useContext, useState } from "react";
import { AccountContext } from "../App";
import { Post } from "../models/Post";
import { postPostAPI } from "../service/PostService";
import { useNavigate } from "react-router";
import './css/Post.css'


/**
 * Create Post Menu component. 
 * Displays small form to create a post.
 * User inputs image URL
 * User inputs image description
 * @returns 
 */
export function CreatePostMenu() {
    const navigate = useNavigate();
    const accountContext = useContext(AccountContext);

    const [imageUrl, setImageUrlInput] = useState("");
    const [description, setDescriptionInput] = useState("");
    
    // sets image url
    function updateImageUrl(event:SyntheticEvent){
        let image = event.target as HTMLTextAreaElement;
            setImageUrlInput(image.value);       
    }

    // sets image description
    function updateContentText(event:SyntheticEvent){
        let text = event.target as HTMLTextAreaElement;
            setDescriptionInput(text.value);
        
    }

    // sends image/description to backend
    function submitPost() {
        console.log("Submitting a new post!")

        // alert box if URL is empty
        if(imageUrl === "") {
            alert("Image URL cannot be empty");
            return;
        // alert box if URL is empty
        }else if(description === ""){
            alert("Description cannot be empty");
            return;
        }

        const post: Post = {
            account: accountContext.account,
            imageUrl: imageUrl,
            description: description,
            numberOfLikes: 0,
            comments: []
        }

        // controller call to send to backend with 'post' data
        postPostAPI(post)
            .then(response => {
                console.log(response);
                if(response.status === 201){
                    navigate("/allPosts");
                }
            })
            .catch((response) => console.log("Some error occurred!" + response))

            
    }

    return (
        <>
        <div className="postContainer">
            <h1>New Post</h1>
            <h4>Create a new post here!! :)</h4>
            
            {/* image url user input box */}
            <label>Image URL:  </label>
            <input name = "imageUrl" value = {imageUrl} onChange = {updateImageUrl}></input>
            
            {/* image description user input box */}
            <label>Description:  </label>
            <input name = "description" value = {description} onChange = {updateContentText}></input>
        
            {/* submit post button */}
            <button onClick = {submitPost}>Submit</button>
        </div>
        </>
    )
}