import "./post.css"
import { Link } from "react-router-dom"

const Main = () =>{
    return(
        <div id="head">
        <img id = "main" src="./image/istockphoto.jpg" alt="dsh"></img>
        <div id="middle">
            <h1 id="clone">Instaclone</h1>
                <Link  id="start" to="/login">Start</Link>
        </div>
        </div>
    )
}

export default Main