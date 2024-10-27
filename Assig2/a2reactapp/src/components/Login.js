import React, { useState, useRef } from 'react';
import SHA256 from 'crypto-js/sha256';
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const loginForm = async (e) => {
        e.preventDefault();
        // Get the value from Ref without binding
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        // Hash the password
        const passwordHash = SHA256(password).toString();
        console.log({ userName: username, passwordHash });
        // Fetch the user request and send POST data
        try {
            const response = await fetch(`http://localhost:5147/api/Login?userName=${username}&passwordHash=${passwordHash}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
                //body: JSON.stringify({ userName: username, passwordHash })
            });

            if (response.ok) {
                const result = await response.json();
                if (result) {
                    // Save the username in Local Storage
                    localStorage.setItem('username', username);
                    navigate('/Dashboard');
                } else {
                    setError('Invalid username or password');
                }
            } else {
                setError('An error occurred. Please try again.');
            }
        } catch (error) {
            setError('A network error occurred. Please try again.');
        }
        };
    return (
        <div className="loginpage" >

            <h2>Log In</h2>
            <form onSubmit={loginForm}>
                <div>
                    <label className="form-label">User Name: </label>
                    <input required type="text" className="form-control" placeholder="Username" ref={usernameRef} autoComplete="username" />
                </div>
                <div>
                    <label className="form-label">Password: </label>
                    <input required type="password" className="form-control" placeholder="Password" ref={passwordRef} autoComplete="password" />
                </div>
                <div>
                    <Link to="/Register">
                        <p className="register-link"> Don't have an account? <br /> <span>Sign up at here</span></p>
                    </Link>
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit" className="btn btn-info">Login</button>
            </form>
        </div >
    );
}
export default Login;

//Reference list:
//Main code:
//How to encrypt password in React js before sending it to the API | Encrypt password using bcrypt js https://www.youtube.com/watch?v=ywlEPtiaHZg
//crypto - js library: https://github.com/nodejs/node/blob/v23.1.0/lib/crypto.js
//SHA256:
//https://www.simplilearn.com/tutorials/cyber-security-tutorial/sha-256-algorithm
//https://www.bilibili.com/video/BV1Ce411M7do/?spm_id_from=333.337.search-card.all.click&vd_source=9a8ebb3892f453e39e9ba1c60d275470
//Use Fetch with async/await: https://dmitripavlutin.com/javascript-fetch-async-await/#2-fetching-json
//Login form:
//https://github.com/nauvalazhar/bootstrap-5-login-page/blob/master/index.html
//https://getbootstrap.com/docs/5.3/forms/overview/#overview

