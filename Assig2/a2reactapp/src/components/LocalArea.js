import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function LocalArea({ }) {
    // Set state variable and function to hold the list of lsaDescription
    const [lsaDescription, setLsaDescription] = useState([]);
    // Set the state to track the selected lsaDescription
    const [selectedLsa, setSelectedLsa] = useState("");

    // fetch the lsa list from Get_ListLocalServiveArea
    useEffect(() => {
        fetch(`http://localhost:5147/api/Get_ListLocalServiceArea`)
            .then(response => response.json())
            .then(data => setLsaDescription(data.filter(lsa => ["NORTHERN DISTRICT", "EASTERN DISTRICT", "SOUTHERN DISTRICT", "WESTERN DISTRICT"].includes(lsa))
            ))
            .catch (err => {
                console.log(err);
            });

    },[]);

    return (
    <div>
    {lsaDescription.map((lsa,index) => (
            <div className="form-check" key={index }>
            <input
                className="form-check-input"
                type="checkbox"
                value={lsa}
                onChange={(e) => setSelectedLsa(e.target.value)}
                id={`flexCheckDefault-${index}`} />
            <label className="form-check-label" htmlFor={`flexCheckDefault-${index}`}  >
                {lsa}
                </label>
            </div >

        ))}
    </div >

    );
}
export default LocalArea;


