import { useEffect, useState } from "react"
import Post from "./post.js"
import Header from "./header.js"

function Postview() {
  const [data, updatedata] = useState([])
  useEffect(() => {
    fetch("https://instaclone-mayv.onrender.com").then((res) => {
      return res.json()
    }).then((data) => {
      updatedata(data.result.reverse())
    })
  }, [])
  return (
    <div className="App">
      <Header/>
      {
        data.map((user, index) => {
          return (
            <Post value={user} key={index} />
          )
        })
      }
    </div>
  );
}

export default Postview;
