import React from "react";
import img from './i.jpg';
import cv from './cv.pdf';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Sidebar() {
    return (
        <div className="Cont pt-4 pb-4" style={{ width: '330px' }}>
            <div className="profile-detail">
                <div className=''>
                    <img className="profile-img" src={img} alt="Profile" />
                </div>

                <div className="name">
                    <h3>Jaydip Khandala</h3>
                    <h4>FullStack Developer</h4>
                </div>
                <button className="CV-name">
                    <a href={cv} download>Download CV</a>
                </button><hr />
            </div>

            <div className="info">
                <div id='Detail' className="row">
                    <div className="info-1 col-md-12 col-12">
                        <div className="info">
                            <div className="icon">
                                <i className="bi bi-envelope"></i>
                            </div>
                            <ul>
                                <li id='title'>EMAIL</li>
                                <li>khandalajaydip761@gmail.com</li>
                            </ul>
                        </div>
                        <div className="info">
                            <div className="icon">
                                <i className="bi bi-phone"></i>
                            </div>
                            <ul>
                                <li id='title'>PHONE</li>
                                <li>+91 7874643462</li>
                            </ul>
                        </div>
                    </div>

                    <div className="info-2 col-md-12">
                        <div className="info">
                            <div className="icon">
                                <i className="bi bi-calendar3"></i>
                            </div>
                            <ul>
                                <li id='title'>BIRTHDAY</li>
                                <li>August 19, 2005</li>
                            </ul>
                        </div>
                        <div className="info">
                            <div className="icon">
                                <i className="bi bi-geo-alt"></i>
                            </div>
                            <ul>
                                <li id='title'>LOCATION</li>
                                <li>Ahmedabad, Gujarat</li>
                            </ul>
                        </div>
                    </div>

                    <div className="info-3 ">
                        <a href="https://www.linkedin.com/in/jaydip-khandala-064268296/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                            <i className="bi bi-linkedin"></i>
                        </a>
                        <a href="https://github.com/Jaydip1908">
                            <i className="bi bi-github"></i>
                        </a>

                        <a href="https://www.instagram.com/j_k_0071/?next=%2F">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <br />
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Sidebar;
