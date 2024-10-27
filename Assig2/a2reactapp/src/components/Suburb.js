import React, { useState, useEffect } from 'react';

function Suburb({ }) {

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