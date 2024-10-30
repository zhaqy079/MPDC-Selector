import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Road({ }) {
    return (
        <div className="input-group has-validation">
            <div class="form-floating is-invalid">
                <input
                type="text"
                className="form-control is-invalid"
                placeholder="Road name" required/>
            </div>
            <div class="invalid-feedback">
                 Please enter a Road Name.
            </div>
        </div >
    );
}
export default Road;