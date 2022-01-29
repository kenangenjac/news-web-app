import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css"

export default function TopBar() {
    const { user, dispatch } = useContext(Context);
    const publicFolder = "http://localhost:5000/images/"

    const handleLogout = () =>{
        dispatch({type: "LOGOUT"})
    }

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
                    {user && (user.userRole === "ADMIN" && 
                            <li className="topListItem">
                                <Link to={"/users"} className="link">USERS</Link>
                            </li>
                        )
                    }
                    <li className="topListItem">
                        <Link to={"/contact"} className="link">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link to={"/about"} className="link">ABOUT</Link>
                    </li>
                    {user && (user.userRole === "ADMIN" && 
                            <li className="topListItem">
                                <Link to={"/write"} className="link">WRITE</Link>
                            </li>
                        )
                    }
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <Link to={"/settings"}>
                        <img className="topImg" src={publicFolder + user.profilePic} alt="profilePicture" />
                    </Link>
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
                    <li className="topListItem" onClick={handleLogout} style={{marginLeft: "35px", listStyle:"none"}}>
                        {user && "LOGOUT"}
                    </li>
            </div>
        </div>
    )
}
