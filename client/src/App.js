import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./components/pages/LandingPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import ForgetPasswordPage from "./components/pages/ForgetPasswordPage";
import FormPage from "./components/pages/FormPage";
import ResponseForm from "./components/pages/ResponseForm";

import "./App.css";

export default function App() {
    const [user, setUser] = useState(null);
    const [formData, setFormData] = useState(null);
    //component, useState,useEffect,props,JSX, fetch
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/login"
                    element={<LoginPage setUser={setUser} />}
                />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/" exact element={<LandingPage />} />

                <Route
                    path="/form"
                    element={<FormPage setFormData={setFormData} />}
                />
                <Route
                    path="/response-form"
                    element={<ResponseForm formData={formData} />}
                />
            </Routes>
        </BrowserRouter>
    );
}
