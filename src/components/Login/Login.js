import { useEffect } from "react";
import { loginWithGoogle } from "./loginHandler";

import "./Login.css";

import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function Login({ user, setUser }) {

    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/board");
        }
    });


    const handleGoogleLogin = async () => {
        const success = await loginWithGoogle();
        setUser(success.user.uid);
        navigate("/board");
    }




    if (!register) {
        return (
            <>
            <Navbar />
            <div className="login-box container">
                <div className="login">

                    <h1 className="login-header">Login</h1>
                    <div className="spacer"> </div>
                    <h3>Email Login</h3>
                    <form onSubmit={handleEmailLogin}>
                        <div>
                            <input type="text" value={email} placeholder="Email" onChange={(e) => {setEmail(e.target.value)}} ></input>
                            <br />
                            <input type="text" value={password} placeholder="Password (Will display)" onChange={(e) => {setPassword(e.target.value)}}></input>
                            <br />
                            <input className="submit-btn" type="submit" value="Submit" />
                            <br />
                        </div>
                    </form>
                    <div className="spacer"> </div>
                    <h3>Or...</h3>
                    <button className="login-btn" onClick={handleGoogleLogin}><img className="google-logo" src="/google_logo.svg" alt="Google Logo" /> Sign in with Google</button>
                </div>
                <div className="toggle-register" onClick={() => {showRegister(!register)}}>New? Register here!</div>
            </div>
            </>
        )
    } else {
        return (
            <>
                <Navbar />
                <div className="login-box container">
                    <div className="login">
                    <h1 className="login-header">Register</h1>
                    <div className="spacer"> </div>
                    <h3>Email Registration</h3>
                        <form onSubmit={handleEmailRegister}>
                        <div>
                            <input type="text" value={email} placeholder="Email" onChange={(e) => {setEmail(e.target.value)}} ></input>
                            <br />
                            <input type="text" value={password} placeholder="Password (Will display)" onChange={(e) => {setPassword(e.target.value)}}></input>
                            <br />
                            <input className="submit-btn" type="submit" value="Submit" />
                            <br />
                        </div>
                    </form>
                    <div className="spacer"> </div>
                    <h3>Or...</h3>
                    <button className="login-btn" onClick={handleGoogleLogin}><img className="google-logo" src="/google_logo.svg" alt="Google Logo" /> Sign in with Google</button>
                    </div>
                    <div className="toggle-register" onClick={() => {showRegister(!register)}}>Already have an account? Sign in instead!</div>
                </div>
            </>
    )}
};
