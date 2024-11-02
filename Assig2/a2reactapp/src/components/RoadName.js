import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Road({ selectedSuburb}) {
    // Set the state variable roads, and the function setRoad to hold the list of RoadName based on user selected suburb
    const [roads, setRoads] = useState([]);
    const [searchRoad, setSearchRoad] = useState(['']); // Update the autocomplete dropdownlist button default value as empty/ user's enter

    // Fetch the list of road name from the Get_ListCamerasInSuburb endpoint
    // Refence: https://iqbalfn.github.io/bootstrap-autocomplete/
    useEffect(() => {
        if (selectedSuburb) {
            fetch(`http://localhost:5147/api/Get_ListCamerasInSuburb?suburb=${selectedSuburb}&locationIdsOnly=false`)
                .then(response => response.json())
                .then(data =>
                    setRoads(data.map(item => item.RoadName)))
                .catch(err => {
                    console.log(err);
                });
        }
        }, [selectedSuburb]);

    return (
        <div className="input-group has-validation">
            <div class="form-floating is-invalid">
                <input
                type="text"
                className="form-control is-invalid"
                    placeholder="Road name"
                    list="roadNameList"
                    autoComplete="off"
                    value={searchRoad}
                    onChange={(e) => setSearchRoad(e.target.value)}
                    // Disable if no suburb is selected
                    disabled={!selectedSuburb} 
                    required />
                <datalist id="roadNameList">
                    {roads.map((road, index) => (
                        <option key={index} value={road} />
                    ))}
                </datalist>
            </div>
            <div className="invalid-feedback">
                { selectedSuburb ? "Please enter a Road Name." : "Please select a suburb first."}
            </div>
        </div >
    );
}
export default Road;