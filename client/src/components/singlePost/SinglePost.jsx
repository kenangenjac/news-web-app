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

    useEffect(()=>{
        const getPost = async ()=>{
            const res = await axios.get("/posts/" + postId);
            setPost(res.data)
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

    const handleEdit = async () => {}

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {
                    post.photo && (<img src={publicFolder + post.photo} alt="" className="singlePostImg" />)
                }
                <h1 className="singlePostTitle">
                    {post.title}
                    {post.username === user?.username && ( //user?.username - if there is no user, its not going to look for this username
                        <div className="singlePostEdit">
                            <i className="singlePostIcon fas fa-edit" onClick={handleEdit}></i>
                            <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                        </div>
                    )}           
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: 
                        <Link to={`/?user=${post.username}`} className="link">
                            <b>{post.username}</b>
                        </Link>
                    </span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className="singlePostDesc">
                    {post.description}
                </p>
            </div>
        </div>
    )
}
