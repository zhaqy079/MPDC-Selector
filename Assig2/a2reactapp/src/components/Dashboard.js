import React, { useState } from 'react';

import { Link } from "react-router-dom";

function Dashboard() {
    // After user login, get the username
    const username = localStorage.getItem('username');
    return (
        <div className="dashboard" >
            <h2>Dashboard</h2>
            {username && <p>Welcome, {username}!</p>}
            <div className="filter-area">
            <h5>Filter</h5>
            </div>
            <div className="search-results">
                {/* Add search results content, will implement at part B's tasks' */}
                <h4>Find Potential Mobile Phone Detection Camera Locations</h4>
                <p>Select the filters below to search for potential locations for mobile phone detection cameras based on expiationDB.</p>
                <Link to="/Report">
                    <button type="button" className="btn btn-warning">Check Report</button>
                </Link>
                <button type="button" className="btn btn-outline-info">ReSearch</button>
            </div>
        </div>
    );
}
export default Dashboard;