import { Routes, Route } from "react-router-dom";
import { Login } from "../Pages/Login";
import { Signup } from "../Pages/Signup";
import { Home } from "../Pages/Home";

export const MainRoutes = () => {
    return (
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<Home/>}/>
    </Routes>
    )
}
