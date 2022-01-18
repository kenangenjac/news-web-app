import "./header.css"

export default function Header() {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img src="https://cdn.pixabay.com/photo/2011/12/14/12/21/orion-nebula-11107__340.jpg" alt="" className="headerImg" />
        </div>
    )
}
