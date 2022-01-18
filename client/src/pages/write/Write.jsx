import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <img src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="writeImg" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput" className="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" hidden="true" />
                    <input type="text" placeholder="title" className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea type="text" className="writeInput writeText" placeholder="Tell Your story..."></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
