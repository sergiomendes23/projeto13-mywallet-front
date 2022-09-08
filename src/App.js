import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";

export default function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/Home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
};