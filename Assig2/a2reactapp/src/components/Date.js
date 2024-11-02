import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function IncidentDate({ }) {
    return (
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="Pick a date" />
        </div>
    );
}
export default IncidentDate;
