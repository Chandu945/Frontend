import "./post.css"
import { useState } from "react"
import Header from "./header"
import { useNavigate } from "react-router-dom"

const Form = () => {
    const [data, updatedata] = useState({ author: "", location: "", description: "", imagefile: "" })
    let date =  new Date().toLocaleString().split(",")[0]
    const [msg , updatemsg] = useState(<div className="new"></div>)
    const navigate = useNavigate()
    const uploadpost = async() => {
        if(data.author.length === 0 || data.location.length===0 || data.description.length === 0 || data.imagefile.length === 0){
               updatemsg(<div className="new">please give valid details</div>)
        }else{
        const formData = new FormData()
        formData.append("Author" , data.author)
        formData.append("Location" , data.location)
        formData.append("Description" , data.description)
        formData.append("Imagefile" , data.imagefile)
        formData.append("Date",date)
        const response = await fetch("https://instaclone-mayv.onrender.com/api/v1/post",{
            method:'POST',
            body:formData
        })
        const resp = await response.json()
        if(resp.message === "Everything is fine"){
            navigate("/main")
        }
    }
        }

    const deleteupload = () =>{
        updatedata({ ...data ,author: "", location: "", description: "", imagefile: "" })
    }
    return (
        <div className="form2">
        <Header/>
        <div id="form">
            <input type="file" id="file" placeholder="No file choosen"  onChange={(e) => { updatedata({ ...data, imagefile: e.target.files[0] }) }}></input>
            <div id="mid">
                <input type="text" placeholder="Author" id="author" value={data.author} onChange={(e) => { updatedata({ ...data, author: e.target.value }) }}></input>
                <input type="text" placeholder="Location" id="location" value={data.location} onChange={(e) => { updatedata({ ...data, location: e.target.value }) }}></input>
            </div>
            <input type="text" placeholder="Description" id="description" value={data.description} onChange={(e) => { updatedata({ ...data, description: e.target.value }) }}></input><br/>
            <div id="clr">
            <button id="bt" onClick={deleteupload} className="design">CLEAR</button>
            <button id="btn" onClick={uploadpost} className="design">SUBMIT</button>
            </div>
            {msg}
        </div>
        </div>
    )
}

export default Form


