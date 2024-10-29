import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Suburb({ }) {
    // Set the state variable suburbs, and function setSuburbs to hold the list of suburbs
    const [suburbs, setSuburbs] = useState([]);
    const [selected, setSelected] = useState([]);

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
        setSelected(suburb);
    };
    
    return (
        <div className="btn-group suburb">
            <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" >{selected} </button>
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
                    </li>
                ) )}
            </ul>
        </div>

    );
    
}
export default Suburb;
// Reference: reactJS SPA React Routing - CardListNew, CardDetail Components.