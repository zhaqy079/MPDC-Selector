import React, { useState } from 'react';

import { Link } from "react-router-dom";

function Dashboard() {
    // After user login, get the username
    const username = localStorage.getItem('username');
    return (
        <div className="dashboard" >
            <div className="dashboard-header">
                <h2>Dashboard </h2>
                {username && <p>Welcome, {username}!</p>}
                
            </div>
            <div className="dashboard-content">
                <div className="filter-area">
                    <h5>Filter</h5>
                    <p>Select the filters below to search </p>
                    <p>Select the filters below to search </p>
                </div>
                <div className="search-results">
                    {/* Add search results content, will implement at part B's tasks' */}
                    <h4>Find Potential Mobile Phone Detection Camera Locations</h4>
                    <p>Select the filters below to search for potential locations for mobile phone detection cameras based on expiationDB.</p>
                    <div className="row">
                        <div className="col-4">
                    <Link to="/Report">
                        <button type="button" className="btn btn-warning">Check Report</button>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <button type="button" className="btn btn-outline-info">ReSearch</button>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    );
}
export default Dashboard;