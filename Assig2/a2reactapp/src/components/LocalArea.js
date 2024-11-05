import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function LocalArea({ }) {
    return (
        <div className="form-check">
            <input className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"/>
                <label className="form-check-label" for="flexCheckDefault">
                    Local Area
                </label>
        </div>
    );
}
export default LocalArea;

//URL ref: https://www.unixtimestamp.com/
