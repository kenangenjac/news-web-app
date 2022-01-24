import React from "react";
import { useEffect, useState } from "react"
import axios from "axios"
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.css"

export default function Home() {
    const [posts, setPosts] = useState([]);    //use state hook -- empty initial array[]

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("http://localhost:5000/api/posts/");
            //setPosts(res.data)
            console.log(res)              
        }
        fetchPosts()
    },[])   //empty array indicates to use this useEffect on the beggining

    return (
        <>
            <Header/>
            <div className="home">
                {/* <Posts posts={posts} /> sending posts as a prop */}
                <Posts/>
                <Sidebar/>
            </div>
        </>
    )
}
