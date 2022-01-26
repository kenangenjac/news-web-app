import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./sidebar.css"

export default function Sidebar() {

    const [categories, setCategories] = useState([])

    useEffect(()=>{
        const getCategories = async () => {
            const res = await axios.get("/categories")
            setCategories(res.data)
        }
        getCategories()
    },[])

    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="sidebarImg" src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime in aut expedita iure laboriosam velit ipsam quia, laborum aliquid pariatur</p>
            </div>
            
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                    <ul className="sidebarList">
                        {categories.map((cat)=>(
                            <Link to={`/?cat=${cat.name}`} className="link">
                                <li className="sidebarListItem">{cat.name}</li>
                            </Link>
                        ))}
                    </ul>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook"></i>
                    <i className="sidebarIcon fab fa-instagram"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                </div>
            </div>
        </div>
    )
}
