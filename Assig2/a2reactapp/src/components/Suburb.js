import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Suburb({ setSelectedSuburb }) {
    // Set the state variable suburbs, and function setSuburbs to hold the list of suburbs
    const [suburbs, setSuburbs] = useState([]);
    const [selected, setSelected] = useState(["Suburb"]); // Update the select suburb dropdown button display the default value "Suburb"

    // Fetch the list of suburbs from the Endpoint API
    useEffect(() => {
        fetch(`http://localhost:5147/api/Get_ListCameraSuburbs`)
            .then(response => response.json()) 
            .then(data => setSuburbs(data))    
            .catch(err => {
                console.log(err); 
            });
    }, []);

    // Update Suburb selected button label to display user selected suburb
    const userSelected = (suburb) => {
        setSelected(suburb); // Update the button, display the user's selected suburb 
        setSelectedSuburb(suburb); // Update the selected suburb in the Dashboard component state
    };

    return (
        <div className="btn-group suburb has-validation">
            <button type="button" className="btn btn-light dropdown-toggle is-invalid" data-bs-toggle="dropdown" >{selected} </button>
            {/*Map over the suburbs array to create a list of dropdown items
            Ref: https://stackoverflow.com/questions/63233050/for-some-reason-after-mapping-onclick-event-on-li-wont-work*/}
            <ul className="dropdown-menu">
                {suburbs.map((suburb) => (
                    <li key={suburb}>
                        <Link
                            className="dropdown-item" onClick={() => userSelected(suburb)}>
                            {/*to={`/suburb/${suburb}`} >*/}
                            {suburb} 
                        </Link>
                        <div class="invalid-feedback">
                            Please choose a suburb.
                        </div>
                    </li>
                ) )}
            </ul>
        </div>

    );
    
}
export default Suburb;
// Reference: reactJS SPA React Routing - CardListNew, CardDetail Components.