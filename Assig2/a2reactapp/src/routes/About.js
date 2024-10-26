import React from 'react';

function About() {
    return (
        <div className="aboutpage">
           
            <h2>About</h2>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">The MPDC Site Selector is designed to help SAPOL (South Australia Police) data intelligence officers
                    identify suitable locations for mobile phone detection cameras.</li>
            </ul>
            <br />
            <h2>How It Works</h2>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Users must first log in or register to access the system.</li>
                <li className="list-group-item">This tool enables users to search, filter, and analyze potential sites for mobile phone detection cameras using recent data from SAPOL's Expiations database.</li>
                <li className="list-group-item">Users should apply all four filter controls on the dashboard to narrow down potential locations.</li>
                <li className="list-group-item">After selecting suitable filters, users can generate and review a report on the chosen locations, with an option to download for record-keeping.</li>
            </ul>
            <br />
            <h2>Additional Information</h2>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">For more information about SAPOL’s road safety initiatives, <br />please visit the
                    <a href="https://www.police.sa.gov.au/your-safety/road-safety"> SAPOL Road Safety Page</a>.</li>
                <li className="list-group-item">For more information about South Australia’s mobile phone detection cameras,<br />please visit the
                    <a href=" https://www.thinkroadsafety.sa.gov.au/mobile-phone-detection-cameras"> MPDC Page</a>.</li>

            </ul>
        </div>
    );
}
export default About;

// Flush layout reference: https://getbootstrap.com/docs/5.3/components/list-group/#basic-example
