import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Offence({ }) {



    return (
        <div className="form-group">
            <select className="form-select">
                <option selected>Description</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>

    );
}
export default Offence;
