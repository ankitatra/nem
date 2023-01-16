import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { CreatePost } from "./components/createPost";
import { Allsocial } from "./components/AllSocialmediapost";
import { Navbar } from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <h1>Fullstack Social Media App</h1>
      <Navbar/>
      <Routes>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/createpost" element={<CreatePost/>}></Route>
        <Route path="/allposts" element={<Allsocial/>}></Route>
      </Routes>
    </div>
  );
}

export default App;