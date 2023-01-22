import { useEffect, useState } from "react"
import Post from "./post.js"
import Header from "./header.js"

function Postview() {
  const [data, updatedata] = useState([])
  useEffect(() => {
    fetch("http://localhost:8080/api/v1").then((res) => {
      return res.json()
    }).then((data) => {
      updatedata(data.result)
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
