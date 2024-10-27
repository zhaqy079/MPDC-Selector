import React, { useState, useRef } from 'react';
import SHA256 from 'crypto-js/sha256';
import { Link, useNavigate } from "react-router-dom";

function Register() {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const confirmPwdRef = useRef();
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const registerForm = async (e) => {
        e.preventDefault();
        // Get the value from Ref without binding
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        const confirmPwd = confirmPwdRef.current.value;
        // Add confirmPwd Error info
        if (password !== confirmPwd) {
            setError('Passwords not match');
            return;
        }
        // Hash the password
        const passwordHash = SHA256(password).toString();
        //console.log({ userName: username, passwordHash });
        // Fetch the user request and send POST data
        try {
            const response = await fetch(`http://localhost:5147/api/Register?userName=${username}&passwordHash=${passwordHash}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
                //body: JSON.stringify({ userName: username, passwordHash })
            });

            if (response.ok) {
                const result = await response.json();
                if (result) {
                    navigate('/Login');
                } else {
                    setError('Username already exist');
                }
            } else {
                setError('An error occurred. Please try again.');
            }
        } catch (error) {
            setError('A network error occurred. Please try again.');
        }
    };
    return (
        <div className="registerpage" >

            <h2>Sign Up</h2>
            <form onSubmit={registerForm}>
                <div>
                    <label className="form-label">User Name: </label>
                    <input required type="text" className="form-control" placeholder="Username" ref={usernameRef} autoComplete="username" />
                </div>
                <div>
                    <label className="form-label">Password: </label>
                    <input required type="password" className="form-control" placeholder="Password" ref={passwordRef} autoComplete="password" />
                </div>
                <div>
                    <label className="form-label">Confirm Password: </label>
                    <input required type="password" className="form-control" placeholder="Confirm Password" ref={confirmPwdRef} autoComplete="confirm-password" />
                </div>
                <div>
                    <Link to="/Login">
                        <p className="login-link"> Already have an account? <br /> <span>Login at here</span></p>
                    </Link>
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit" className="btn btn-success">Register</button>
            </form>
        </div >
    );
}
export default Register;