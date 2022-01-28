import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"
import { Context } from "../../context/Context";
import "./singlePost.css"

export default function SinglePost() {
    const location = useLocation();
    const postId = location.pathname.split("/")[2];

    const [post, setPost] = useState({})
    const publicFolder = "http://localhost:5000/images/";
    const { user } = useContext(Context);

    //  states for updating a post
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [updateMode, setUpdateMode] = useState(false)

    useEffect(()=>{
        const getPost = async ()=>{
            const res = await axios.get("/posts/" + postId);
            setPost(res.data)
            setTitle(res.data.title)    // setting values so i use them in editing
            setDescription(res.data.description)
            // console.log(res.data)
        }
        getPost()
    }, [postId]) // whenever this path changes, this useEffect is invoked

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id}`, {
                data: { username: user.username } // username has to be sent through data because it is delete method
            })
            window.location.replace("/");
        } catch (error) {
            console.log(error);
        }
    }

    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${post._id}`, {
                    username: user.username,
                    title,
                    description
                }
            )
            setUpdateMode(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {
                    post.photo && (<img src={publicFolder + post.photo} alt="" className="singlePostImg" />)
                }
                {
                    updateMode ? 
                    ( <h1 className="singlePostTitle">Title: <input type="text" className="singlePostTitle singlePostTitleInput" autoFocus value={title} onChange={e=>{setTitle(e.target.value)}}/></h1> ) : 
                    (
                        <h1 className="singlePostTitle">
                            {title}
                            {post.username === user?.username && //user?.username - if there is no user, its not going to look for this username
                            ( 
                                <div className="singlePostEdit">
                                    <i className="singlePostIcon fas fa-edit" onClick={() => setUpdateMode(true) }></i>
                                    <i className="singlePostIcon far fa-trash-alt" onClick={ handleDelete }></i>
                                </div>
                            )}           
                        </h1>
                    )
                }
                
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: 
                        <Link to={`/?user=${post.username}`} className="link">
                            <b>{post.username}</b>
                        </Link>
                    </span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                {
                    updateMode ? (
                        <div>
                            <h1 className="singlePostTitle singlePostTitleUpdate">Description: </h1> 
                            <div className="writeFormGroupUpdate">
                                <textarea value={description} type="text" className="writeInput writeText" placeholder="Update Your story..." onChange={e=>setDescription(e.target.value)}></textarea>
                            </div>
                        </div>
                    ) : 
                    (
                        <p className="singlePostDesc">
                            {description}
                        </p>
                   )
                }
                {updateMode && <button className="singlePostButton" onClick={handleUpdate}>Update</button>} 
            </div>
        </div>
    )
}
