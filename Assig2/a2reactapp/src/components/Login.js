import React from 'react';
import { useState, useEffect } from 'react';
import SHA256 from 'crypto-js/sha256';

function Login() {
    return (
        <div className="loginpage" >

            <h2>Login</h2>

        </div >
    );
}
export default Login;

//Reference list:
//How to encrypt password in React js before sending it to the API | Encrypt password using bcrypt js https://www.youtube.com/watch?v=ywlEPtiaHZg
//crypto - js library: https://github.com/nodejs/node/blob/v23.1.0/lib/crypto.js
//SHA256:
//https://www.simplilearn.com/tutorials/cyber-security-tutorial/sha-256-algorithm
//https://www.bilibili.com/video/BV1Ce411M7do/?spm_id_from=333.337.search-card.all.click&vd_source=9a8ebb3892f453e39e9ba1c60d275470
//login form:
//https://github.com/nauvalazhar/bootstrap-5-login-page/blob/master/index.html
//https://getbootstrap.com/docs/5.3/forms/overview/#overview
