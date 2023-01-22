import "./post.css";
import { useNavigate } from "react-router-dom";

const Header = () =>{
    const navigate = useNavigate()
    const handleform = () =>{
        navigate("/form")
    }
    return(
          <div id="viewHead">
               <div id="leftHead">
                <img src="./image/icon.svg" alt="img"></img>
                <h1 id="h">Instaclone</h1>
               </div>
               <div>
               <img src="./image/camera.png" alt = "clone" id="cam" onClick={handleform}></img>
               </div>
          </div>
    )
}

export default Header;