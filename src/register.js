import "./post.css"
import { useState } from "react"
import NormalHeader from "./normalhead"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const [data, updatereg] = useState({ email: "", password: "", name: "" })
  const [msg, updatemsg] = useState()
  const navigate = useNavigate()
  const handlereg = async () => {
    if(data.name.length === 0){
      updatemsg(<div className="new2">Please enter your name</div>)
    }else if(data.password.length < 6){
      updatemsg(<div className="new2">Password must be min 6 characters</div>)
    }
    else{
    const formdata = new FormData()
    formdata.append("name", data.name)
    formdata.append("email", data.email)
    formdata.append("password", data.password)
    const response = await fetch("https://instaclone-mayv.onrender.com/api/v1/register", {
      method: 'POST',
      body: formdata
    })
    const res = await response.json()
    if (res.status === "failure") {
      updatemsg(<div className="new2">user already exists</div>)
    }
    navigate("/login")
  }
}
  const handle = () => {
    navigate("/login")
  }
  return (
    <div className="form2">
      <NormalHeader />
      <div className="loginform">
        <label htmlFor="name">Full name</label>
        <input type="text" placeholder="Enter your Name" value={data.name} onChange={(e) => { updatereg({ ...data, name: e.target.value }) }} id="name" name="name" className="enter"></input>
        <label htmlFor="email">Email </label>
        <input type="email" placeholder="Enter your email" value={data.email} onChange={(e) => { updatereg({ ...data, email: e.target.value }) }} id="email" name="email" className="enter"></input>
        <label htmlFor="password">Password </label>
        <input type="password" placeholder="Enter your password" value={data.password} onChange={(e) => { updatereg({ ...data, password: e.target.value }) }} id="password" name="password" className="enter"></input>
        <button className="btn" id="register" onClick={handlereg}>REGISTER</button>
        {msg}
        <button className="btn" onClick={handle} id="res" >Already have an account? Login here</button>
      </div>
    </div>
  )
}

export default Register