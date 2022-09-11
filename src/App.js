import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./Context/UserContext";

import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import PageIn from "./PageIn";
import PageOut from "./PageOut";

export default function App () {

    const [token, setToken] = useState('');
    const [usuario, setUsuario] = useState({});

    return (
        <UserContext.Provider value={{
            token, setToken, usuario, setUsuario,
        }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/pagein" element={<PageIn />} />
                    <Route path="/pageout" element={<PageOut />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
};