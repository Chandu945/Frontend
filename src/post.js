import "./post.css"

const Post = (props) =>{
    return (
        <div className="post">
            <div className="posthead">
                  <div>
                    <h1 className="name">{props.value.name}</h1>
                    <p className="location">{props.value.location}</p>
                  </div>
                  <img className="dot" src="./image/more_icon.svg" alt="dots"></img>
            </div>
            <div className="imgdiv">
            <img className="imag" src={`https://instaclone-mayv.onrender.com/images/${props.value.postimage}`} alt="random"></img>
            </div>
            <div className="end">
                    <img src="./image/heart.png" alt="heart" className="heart"></img>
                    <img src="./image/share.png" alt="share" className="share"></img>
                <h3 className="date">{props.value.date}</h3>
            </div>
            <h3 className="like">{props.value.likes} likes</h3>
            <div >
                <h1 className="footer">{props.value.description}</h1>
            </div>
        </div>
        
    )
}

export default Post