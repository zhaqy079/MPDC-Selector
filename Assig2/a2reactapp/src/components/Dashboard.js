import React, { useState , useEffect} from 'react';
import { Link } from "react-router-dom";
import Suburb from './Suburb';
import Road from './RoadName';
import Offence from './OffenceDescription';
import LocalArea from './LocalArea'; 

function Dashboard() {
    // After user login, get the username
    const username = localStorage.getItem('username');
    // Add State var for selected suburb
    const [selectedSuburb, setSelectedSuburb] = useState("");
    // Add state variable to get potential location
    const [selectedLsa, setSelectedLsa] = useState([]);
    const [recommendedLocations, setRecommendedLocations] = useState([]);
    // Add state to prevent fetch if no LSA is selected
    const [isFilter, setIsFilter] = useState(false);

    // Fetch the recommended locations with LsaDescription area is been selected 
    const fetchLocations = () => {
        if (selectedLsa) {
            fetch(`http://localhost:5147/api/Get_RecommendedLocations/Get_RecommendedLocations?lsaDescriptions=EASTERN%20DISTRICT&lsaDescriptions=NORTHERN%20DISTRICT`)
            //fetch(`http://localhost:5147/api/Get_RecommendedLocations/Get_RecommendedLocations?lsaDescriptions=${encodeURIComponent(selectedLsa)}`)
                .then(response => response.json())
                .then(data => {
                    setRecommendedLocations(data);
                    setIsFilter(true);
                })
                .catch(err => {
                    console.log(err);
                });
        } else {
            console.log("Please select the filter area");
        }
    };

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
                        {/*Hold the function to update the selectedSuburb*/}
                        <Suburb setSelectedSuburb={ setSelectedSuburb} />
                        <label className="form-label">Select a Road:</label>
                        {/*Accept the selectedSuburb to fetch the roadName*/}
                        <Road selectedSuburb={ selectedSuburb} /> 
                        <label className="form-label">Select Description:</label>
                        <Offence />
                        <label className="form-label">Local Area:</label>
                        {/*Accept the selectedLsa to fetch the locations*/}
                        <LocalArea setSelectedLsa={setSelectedLsa} />
                        <br />
                        <button type="button" className="btn btn-info filter-button" onClick={fetchLocations}>Find Location</button>
                    </div>
                </div>
                <div className="search-results">
                    {/* Add search results content, will implement at part B's tasks' */}
                    <h4>Select Potential MPDC Locations</h4>
                    <p>Select the filters at the right to search for potential locations for mobile phone detection cameras based on your search options.</p>
                    <p className="notes"> *Notes: I have some issue on pass the user filter data to the backend so please choose local Area as: 'EASTERN DISTRICT' ((ToT))</p>
                    {/*display the filter outcome*/}
                    <ul>
                        {recommendedLocations.map((location, index) => (
                            <li key={index}>{location.suburb}, {location.roadName},{location.localServiceArea}</li>
                        ))}
                    </ul>
                    <div className="dashboard-button">
                        <Link to="/Report">
                            <button type="button" className="btn btn-warning report-button " disabled={!isFilter}>Check Report</button>
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