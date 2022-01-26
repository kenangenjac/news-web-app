import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {

    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input type="email" className="loginInput" placeholder="Enter Your email..." required={true} />
                <label>Password</label>
                <input type="password" className="loginInput" placeholder="Enter Your password..." required={true} />
                <button className="loginButton">Login</button>
            </form>
            <button className="loginRegisterButton">
                <Link to={"/register"} className="link">Register</Link>
            </button>
        </div>
    )
}
