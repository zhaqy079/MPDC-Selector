import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

function Offence({ offenceDesciption }) {
    // Set the state variable for hold the list of offence description
    const [offences, setOffences] = useState([]);

    // Fetch the list of offences descriptions from Get_SearchOffencesByDescription
    useEffect(() => {
        fetch(`http://localhost:5147/api/Get_SearchOffencesByDescription?searchTerm=${offenceDesciption}&offenceCodesOnly=false`)
            .then(response => response.json())
            .then(data => setOffences(data))
            .catch(err => {
                console.log(err);
            });

    }, [offenceDesciption]);


    return (
        <div className="form-group">
            <select className="form-select">
                <option selected>Description</option>
                {offences.map((offence, index) => (
                    <option key={index} value={offence.description} />
                ))}


            </select>
        </div>

    );
}
export default Offence;
