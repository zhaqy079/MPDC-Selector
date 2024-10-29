import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Road({ }) {
    return (
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="Road name"/>
        </div>
    );
}
export default Road;