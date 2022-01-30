import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { FaInstagram, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";

export default function Sidebar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get("/categories");
      setCategories(res.data);
    };
    getCategories();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          className="sidebarImg"
          src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime in
          aut expedita iure laboriosam velit ipsam quia, laborum aliquid
          pariatur
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <div className="sidebarList w-50 d-flex">
          {categories.map((cat) => (
            <Link to={`/?cat=${cat.name}`} className="link">
              <span className="sidebarListItem">{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon">
            <FaFacebookSquare />
          </i>
          <i className="sidebarIcon">
            <FaInstagram />
          </i>
          <i className="sidebarIcon">
            <FaTwitterSquare />
          </i>
        </div>
      </div>
    </div>
  );
}
