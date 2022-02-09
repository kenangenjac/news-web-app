import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";
import { FaInstagram, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const publicFolder = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <nav class="nav-first d-flex align-items-center justify-content-between">
      <ul class="nav first">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page">
            <Link to={"/"} className="link">
              HOME
            </Link>
          </a>
        </li>
        {user && user.userRole === "ADMIN" && (
          <li class="nav-item">
            <a class="nav-link">
              <Link to={"/users"} className="link">
                USERS
              </Link>
            </a>
          </li>
        )}
        <li class="nav-item target">
          <a class="nav-link">
            <Link to={"/"} className="link">
              CONTACT
            </Link>
          </a>
        </li>
        <li class="nav-item target">
          <a class="nav-link">
            <Link to={"/"} className="link">
              ABOUT
            </Link>
          </a>
        </li>
        {user && user.userRole === "ADMIN" && (
          <li class="nav-item">
            <a class="nav-link">
              <Link to={"/write"} className="link">
                WRITE
              </Link>
            </a>
          </li>
        )}
      </ul>

      <ul class="nav">
        {user ? (
          <Link to={"/settings"}>
            <img
              className="topImg"
              src={publicFolder + user.profilePic}
              alt={user.username}
            />
          </Link>
        ) : (
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link">
                <Link to={"/login"} className="link">
                  LOGIN
                </Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <Link to={"/register"} className="link">
                  REGISTER
                </Link>
              </a>
            </li>
          </ul>
        )}
        <li
          class="nav-item"
          onClick={handleLogout}
          style={{ marginLeft: "35px", listStyle: "none" }}
        >
          {user && (
            <a class="nav-link" style={{ cursor: "pointer" }}>
              LOGOUT
            </a>
          )}
        </li>
      </ul>
    </nav>
  );
}
