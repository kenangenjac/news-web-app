import { useContext, useState } from "react"
import axios from "axios"
import { Context } from "../../context/Context";
import "./write.css"

export default function Write() {

    const [file, setfile] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDesc] = useState("");
    const {user} = useContext(Context);

const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
        username: user.username,
        title,
        description
    }
    if(file){
        const data = new FormData()
        const filename = Date.now() + file.name;
        data.append("name", filename)   // "name" and "file" required by backend definitions in images.js
        data.append("file", file)
        newPost.photo = filename;
        try {
            await axios.post("/upload", data);
        } catch (error) {
            console.log(error)
        }
    }
    try {
        const res = await axios.post("/posts", newPost);   
        window.location.replace("/post/" + res.data._id);
    } catch (error) {
        console.log(error);
    }
}

    return (
        <div className="write">
            {file && <img src={URL.createObjectURL(file)} alt="" className="writeImg" />}            
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput" className="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}} onChange={e=>setfile(e.target.files[0])} />
                    <input type="text" placeholder="title" className="writeInput" autoFocus={true} onChange={e=>setTitle(e.target.value)} />
                </div>
                <div className="writeFormGroup">
                    <textarea type="text" className="writeInput writeText" placeholder="Tell Your story..." onChange={e=>setDesc(e.target.value)}></textarea>
                </div>
                <button className="writeSubmit" type="submit">Publish</button>
            </form>
        </div>
    )
}
