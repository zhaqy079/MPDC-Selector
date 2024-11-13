import React, { useState, useEffect } from 'react';

function Report() {

    return (
        <div className = "report-page" >
            <h2>Recommended MPDC Sites</h2>
           
                {/*The first location report content*/}
                <div className="report-row">
                    <img src="/image1.png"  className="report-image" />
                    <div className="report-description">
                        <h4>LEAWOOD GARDENS, South Eastern Freeway</h4>
                    <p>This location in the Eastern District is ideal for monitoring due to its highest offence count in our DB.
                        <br /> 
                        <br />  Looking at the map, you can see it’s on a busy freeway with lots of intersections, which naturally increases the chances of accidents or risky behavior. With cars moving at higher speeds on the freeway, drivers distracted by their phones can create serious safety issues.
                        <br /> 
                        <br />  Installing a Mobile Phone Detection Camera (MPDC) here would help to remind drivers to keep their focus on the road and reduce dangerous habits.</p>
                    </div>
                </div>
                {/*The second location report content*/}
                <div className="report-row">
                    <img src="/image2.png" className="report-image" />
                    <div className="report-description">
                        <h4>ADELAIDE, Grote Street</h4>
                    <p>This location, also in the Eastern District, is in the heart of the city, where there’s a high volume of traffic and frequent mobile phone usage.
                        <br /> 
                        <br /> The street is lined with shops, restaurants, and busy pedestrian areas, making it a place where people are often checking their phones, whether they’re walking or driving.
                        <br /> 
                        <br /> Installing an MPDC here would help discourage mobile phone use by drivers in this busy part of town, making the area safer for everyone.
                    </p>
                    </div>
                </div>
            
            </div>
        
        
    );
}
export default Report;