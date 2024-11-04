import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

function Offence() {
    // Set the state variable for hold the list of offence description
    const [offences, setOffences] = useState([]);
    // Set the state to track the selected offence
    const [selectedOffence, setSelectedOffence] = useState("");

    // Fetch the list of offences descriptions from Get_SearchOffencesByDescription
    useEffect(() => {
        fetch(`http://localhost:5147/api/Get_SearchOffencesByDescription?offenceCodesOnly=false`)
            .then(response => response.json())
            .then(data => setOffences(data))
            .catch(err => {
                console.log(err);
            });

    }, []);


    return (
        <div className="form-group">
            <select
                className="form-select"
                value={selectedOffence}
                onChange={(e) => setSelectedOffence(e.target.value)}>
                <option value="">Description</option>
                {offences.map((offence, index) => (
                    <option key={index} value={offence.description}>
                        {offence.description}
                    </option>
                ))}
            </select>
        </div>

    );
}
export default Offence;
