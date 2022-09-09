import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import PageIn from "./PageIn";
import PageOut from "./PageOut";

export default function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/home" element={<Home />} />
                <Route path="/pagein" element={<PageIn />} />
                <Route path="/pageout" element={<PageOut />} />
            </Routes>
        </BrowserRouter>
    )
};