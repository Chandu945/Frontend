import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./Mainview";
import Postview from "./postview";
import Form from "./form";
import Register from "./register";
import Login from "./login";

function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/main" element = {<Postview/>}></Route>
            <Route path="/form" element = {<Form/>}></Route>
            <Route path="/login" element = {<Login/>}></Route>
            <Route path="/register" element = {<Register/>}></Route>
            <Route path="*" element={<h1>404 error page not found</h1>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default App