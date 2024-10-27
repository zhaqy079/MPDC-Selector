import React, { useState } from 'react';

import { Link } from "react-router-dom";

function Dashboard() {
    // After user login, get the username
    const username = localStorage.getItem('username');
    return (
        <div className="dashboard" >

            <h2>Dashboard</h2>
            {username && <p>Welcome, {username}!</p>}
        </div>
    );
}
export default Dashboard;