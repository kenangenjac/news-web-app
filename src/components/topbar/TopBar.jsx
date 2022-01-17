import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
    const user = false;
    return (
        <div className="topBar">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook"></i>
                <i className="topIcon fab fa-instagram"></i>
                <i className="topIcon fab fa-twitter-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to={"/"} className="link">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link to={"/about"} className="link">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link to={"/contact"} className="link">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link to={"/write"} className="link">WRITE</Link>
                    </li>
                    <li className="topListItem">
                        {user && "LOGOUT"}
                        {/* <Link to={"/logout"} className="link">LOGOUT</Link> */}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <img className="topImg" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt="profilePicture" />
                ):(
                    <ul className="topList">
                        <li className="topListItem">
                            <Link to={"/login"} className="link">LOGIN</Link>
                        </li>
                        <li className="topListItem">
                            <Link to={"/register"} className="link">REGISTER</Link>
                        </li>
                    </ul> 
                    )}
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
