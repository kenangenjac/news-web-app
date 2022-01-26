import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import { useLocation } from "react-router-dom";

export default function Home() {
    const [posts, setPosts] = useState([]); //use state hook -- empty initial array[]
    const {search} = useLocation(); // gives path after /root of the current location

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data)
    };
    fetchPosts();
  }, [search]); 

  return (
    <>
      <Header />
      <div className="home">
        {/* <Posts posts={posts} /> sending posts as a prop */}
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
