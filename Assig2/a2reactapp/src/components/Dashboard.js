import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Suburb from './Suburb';
import Road from './RoadName';
import Offence from './OffenceDescription';

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
                    <div className="filter-options">
                        <label className="form-label">Select a Suburb:</label>
                        <Suburb />
                        <label className="form-label">Select a Road:</label>
                        <Road />
                        <label className="form-label">Select a Date:</label>
                        <Suburb />
                        <label className="form-label">Enter Description:</label>
                        <Offence />
                        <br />
                        <button type="button" className="btn btn-info filter-button">Find Location</button>
                    </div>
                </div>
                <div className="search-results">
                    {/* Add search results content, will implement at part B's tasks' */}
                    <h4>Select Potential MPDC Locations</h4>
                    <p>Select the filters at the right to search for potential locations for mobile phone detection cameras based on your search options.</p>
                    
                    <div className="dashboard-button">
                            <Link to="/Report">
                                <button type="button" className="btn btn-warning report-button ">Check Report</button>
                        </Link>
                        <button type="button" className="btn btn-outline-info refresh-button" onClick={() => window.location.reload()}>ReSearch</button>
                        {/*ref: https://www.freecodecamp.org/news/refresh-the-page-in-javascript-js-reload-window-tutorial/*/}
                    </div>
                </div>
            </div>
            </div>
        
    );
}
export default Dashboard;