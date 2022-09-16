import { useEffect, useState } from "react";
import { registerWithEmail, loginWithEmail, loginWithGoogle } from "./loginHandler";

import "./Login.css";

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

    const clearState = () => {
        setEmail("");
        setPassword("");
    }

    const handleGoogleLogin = async () => {
        const success = await loginWithGoogle();
        setUser(success.user.uid);
        navigate("/home");
    }

    const handleEmailLogin = (e) => {
        e.preventDefault();

        loginWithEmail(email, password)

        clearState();
    }

    const handleEmailRegister = async (e) => {
        e.preventDefault();

        registerWithEmail(email, password).then(
            loginWithEmail(email, password)
        );
        clearState();
    }

    // if (!register) {
        return (
            <>
            <Navbar />
            <div className="login-box container">
                <div className="login">
                    <h1>Login</h1>
                    <button className="btn btn-dark" onClick={handleGoogleLogin}><img src="/google_logo.svg" alt="Google Logo" /></button>
                    {/* <div className="spacer"> </div> */}
                    {/* <h1>Email</h1> */}
                    {/* <form onSubmit={handleEmailLogin}>
                        <div>
                            <input type="text" value={email} placeholder="Email" onChange={(e) => {setEmail(e.target.value)}} ></input>
                            <br />
                            <input type="text" value={password} placeholder="Password (Will display)" onChange={(e) => {setPassword(e.target.value)}}></input>
                            <br />
                            <input type="submit" value="Submit" />
                            <br />
                        </div>
                    </form> */}
                </div>
                {/* <div className="toggle-register" onClick={() => {showRegister(!register)}}>New? Register here!</div> */}
            </div>
            </>
        )
    // }

//     else {
//         return (
//             <>
//                 <h1 className="header">Your Private Kanban Board is a click away...</h1>
//                 <div className="login-box container">
//                     <div className="login">
//                         <h1>Email</h1>
//                         <form onSubmit={handleEmailRegister}>
//                         <div>
//                             <input type="text" value={email} placeholder="Email" onChange={(e) => {setEmail(e.target.value)}} ></input>
//                             <br />
//                             <input type="text" value={password} placeholder="Password (Will display)" onChange={(e) => {setPassword(e.target.value)}}></input>
//                             <br />
//                             <input type="submit" value="Submit" />
//                             <br />
//                         </div>
//                     </form>
//                     </div>
//                     <div className="toggle-register" onClick={() => {showRegister(!register)}}>Already have an account? Sign in instead!</div>
//                 </div>
//             </>
//     )}
};
