import React, { useState, useEffect } from 'react';

function Report() {

    return (
        <div className = "report-page" >
            <h2>Report</h2>
            {/*Display maprequest*/}
            <div className="report-display">
                <h3>Recommended MPDC Sites</h3>
                {/*The first location report content*/}
                <div className="report-row">
                    <img src="/image1.png"  className="report-image" />
                    <div className="report-description">
                        <h4>LEAWOOD GARDENS, South Eastern Freeway</h4>
                        <p>This location in the Eastern District is ideal for monitoring due to its highest offence count in our DB.</p>
                    </div>
                </div>
                {/*The second location report content*/}
                <div className="report-row">
                    <img src="/image2.png" className="location-image" />
                    <div className="report-description">
                        <h4>ADELAIDE, Grote Street/West Terrace</h4>
                        <p>This location is also in the Eastern District and shows significant mobile phone usage offences.</p>
                    </div>
                </div>
            
            </div>
        
        </div >
    );
}
export default Report;