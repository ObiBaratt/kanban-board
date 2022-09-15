import { useEffect, useState } from "react";
import { registerWithEmail, loginWithGoogle } from "./loginHandler";

import "./Login.css";
import { browserLocalPersistence, setPersistence, signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function Login({ user, setUser }) {
    const [register, showRegister] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/home");
        }
    });

    setPersistence(auth, browserLocalPersistence);

    const clearState = () => {
        setEmail("");
        setPassword("");
    }

    const handleGoogleLogin = async () => {
        const success = await loginWithGoogle();
        console.log(success.user.uid);
        navigate("/home");
    }

    const handleEmailLogin = async (e) => {
        e.preventDefault();

        await signInWithEmailAndPassword(email, password).catch((err) => {
            console.log(err.message)
        });
        clearState();
    }

    const handleEmailRegister = async (e) => {
        e.preventDefault();

        registerWithEmail(email, password).then(
            signInWithEmailAndPassword(email, password)
        ).catch((err) => {
            console.log(err.message)
        });
        clearState();
    }

    if (!register) {
        return (
            <>
            <Navbar />
            <div className="login-box container">
                <div className="login">
                    <h1>Google</h1>
                    <div onClick={handleGoogleLogin}>Google Login</div>
                    <div className="spacer"> </div>
                    <h1>Email</h1>
                    <form onSubmit={handleEmailLogin}>
                    <div>
                            <input type="text" value={email} placeholder="Email" onChange={(e) => {setEmail(e.target.value)}} ></input>
                            <br />
                            <input type="text" value={password} placeholder="Password (Will display)" onChange={(e) => {setPassword(e.target.value)}}></input>
                            <br />
                            <input type="submit" value="Submit" />
                            <br />
                        </div>
                    </form>
                </div>
                <div className="toggle-register" onClick={() => {showRegister(!register)}}>New? Register here!</div>
            </div>
            </>
        )}

    else {
        return (
            <>
                <h1 className="header">Your Private Kanban Board is a click away...</h1>
                <div className="login-box container">
                    <div className="login">
                        <h1>Email</h1>
                        <form onSubmit={handleEmailRegister}>
                        <div>
                            <input type="text" value={email} placeholder="Email" onChange={(e) => {setEmail(e.target.value)}} ></input>
                            <br />
                            <input type="text" value={password} placeholder="Password (Will display)" onChange={(e) => {setPassword(e.target.value)}}></input>
                            <br />
                            <input type="submit" value="Submit" />
                            <br />
                        </div>
                    </form>
                    </div>
                    <div className="toggle-register" onClick={() => {showRegister(!register)}}>Already have an account? Sign in instead!</div>
                </div>
            </>
    )}
};
