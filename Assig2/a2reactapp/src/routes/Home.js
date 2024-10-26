import React from 'react';


function Home() {
    return (
        <div className="homepage">

            <h1>Welcome to MPDC Site Selector</h1>
            {/*{Add carousel effect: https://getbootstrap.com/docs/4.0/components/carousel/ */}
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/KlwGbK3REm41bScYDjX2" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://www.mynrma.com.au/-/media/driving-images/mobile-phone-camera-1140x600.jpg?h=600&iar=0&w=1140&hash=D9499EC4F2A1204C568655CA6213E7EA" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://media.drive.com.au/obj/tx_q:50,rs:auto:3840:2160:1/driveau/upload/cms/uploads/4318ffef-82f2-5e45-80ae-9cd66c350000" alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/xmWlWEWuSFmkNLxkvraJ" alt="Fourth slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </a>
            </div>

            <p>Your tool for identifying high-priority locations for mobile phone detection cameras.<br /> Log in to start selecting and reporting potential locations today.</p>

            <button type="button" className="btn btn-info">Login</button>
        </div>
    );
}
export default Home;