import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Suburb({ }) {
    // Set the state variable suburbs, and function setSuburbs to hold the list of suburbs
    const [suburbs, setSuburbs] = useState([]);
    // Fetch the list of suburbs from the Endpoint API
    useEffect(() => {
        fetch(`http://localhost:5147/api/Get_ListCameraSuburbs`)
            .then(response => response.json()) 
            .then(data => setSuburbs(data))    
            .catch(err => {
                console.log(err); 
            });
    }, []); 

    return (
        <div className="btn-group suburb">
            <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" >
                Select Suburb
            </button>
            <div className="dropdown-menu">
            </div>
        </div>

    );
    
}
export default Suburb;
// Reference: reactJS SPA React Routing - CardListNew, CardDetail Components.