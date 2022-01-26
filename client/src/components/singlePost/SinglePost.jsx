import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"
import "./singlePost.css"

export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];

    const [post, setPost] = useState({})

    useEffect(()=>{
        const getPost = async ()=>{
            const res = await axios.get("/posts/" + path);
            setPost(res.data)
            // console.log(res.data)
        }
        getPost()
    }, [path]) // whenever this path changes, this useEffect is invoked

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {
                    post.photo && <img src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="singlePostImg" />
                }
                <h1 className="singlePostTitle">
                    {post.title}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fas fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
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
