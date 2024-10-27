import React, { useState } from 'react';
import SHA256 from 'crypto-js/sha256';
import { Link } from "react-router-dom";

function Register() {
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
                    <input required type="password" className="form-control" placeholder="Confirm Password" ref={confirmPasswordRef} autoComplete="new-password" />
                </div>
                <div>
                    <Link to="/Login">
                        <p className="login-link"> Already have an account? <br /> <span>Login here</span></p>
                    </Link>
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit" className="btn btn-info">Register</button>
            </form>
        </div >
    );
}
export default Register;