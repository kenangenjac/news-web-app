import "./topbar.css"

export default function TopBar() {
    return (
        <div className="topBar">
            <div className="topLeft">
                <i  className="topIcon fab fa-facebook"></i>
                <i  className="topIcon fab fa-instagram"></i>
                <i  className="topIcon fab fa-twitter-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img className="topImg" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt="profilePicture" />
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
