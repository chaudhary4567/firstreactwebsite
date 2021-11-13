import React from 'react';
import { NavLink } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<footer className="footer-section">
        <div className="container">
            <div className="footer-cta pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="cta-text">
                                <h4>Find us</h4>
                                <span>XYZ, Delhi India</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-phone"></i>
                            <div className="cta-text">
                                <h4>Call us</h4>
                                <span>9123456789</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="far fa-envelope-open"></i>
                            <div className="cta-text">
                                <h4>Mail us</h4>
                                <span>xyz@info.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <NavLink to="#">Rohit <span>App</span></NavLink>
                            </div>
                            <div className="footer-text">
                                <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                elit,Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="footer-social-icon">
                                <span>Follow us</span>
                                <NavLink to="#"><i className="fab fa-facebook-f facebook-bg"></i></NavLink>
                                <NavLink to="#"><i className="fab fa-twitter twitter-bg"></i></NavLink>
                                <NavLink to="#"><i className="fab fa-google-plus-g google-bg"></i></NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><NavLink to="#">Home</NavLink></li>
                                <li><NavLink to="#">about</NavLink></li>
                                <li><NavLink to="#">services</NavLink></li>
                                <li><NavLink to="#">portfolio</NavLink></li>
                                <li><NavLink to="#">Contact</NavLink></li>
                                <li><NavLink to="#">About us</NavLink></li>
                                <li><NavLink to="#">Our Services</NavLink></li>
                                <li><NavLink to="#">Expert Team</NavLink></li>
                                <li><NavLink to="#">Contact us</NavLink></li>
                                <li><NavLink to="#">Latest News</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div className="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address"/>
                                    <button><i className="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2021, All Right Reserved 
                            <NavLink to="codewinkel.com" target="_blank"> Harishankar Singh</NavLink></p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                            <ul>
                                <li><NavLink to="#">Home</NavLink></li>
                                <li><NavLink to="#">Terms</NavLink></li>
                                <li><NavLink to="#">Privacy</NavLink></li>
                                <li><NavLink to="#">Policy</NavLink></li>
                                <li><NavLink to="#">Contact</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
				
		</>
	)
}

export default Footer