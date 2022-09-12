import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../Context/UserContext";

import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import Home from "./Account/Home";
import Income from "./Account/Income";
import Outcome from "./Account/Outcome";

export default function App () {

    const [token, setToken] = useState('');
    const [usuario, setUsuario] = useState('');

    return (
        <UserContext.Provider value={{
            token, setToken, usuario, setUsuario,
        }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/income" element={<Income />} />
                    <Route path="/outcome" element={<Outcome />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
};