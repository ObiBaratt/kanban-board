import { useEffect } from "react";
import { loginWithGoogle } from "./loginHandler";

import "./Login.css";

import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function Login({ user, setUser }) {

    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/home");
        }
    });


    const handleGoogleLogin = async () => {
        const success = await loginWithGoogle();
        setUser(success.user.uid);
        navigate("/home");
    }



        return (
            <>
            <Navbar />
            <div className="login-box container">
                <div className="login">
                    <h1>Login</h1>
                    <button className="btn btn-dark" onClick={handleGoogleLogin}><img src="/google_logo.svg" alt="Google Logo" /></button>
                </div>
            </div>
            </>
        )
};
