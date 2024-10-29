import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Offence({ }) {
    return (
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="Enter Description" />
        </div>
    );
}
export default Offence;
