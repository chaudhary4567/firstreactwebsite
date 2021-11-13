import React, {useState} from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {

	const [show, setShow] = useState(false);

    return (
        <>
           <section className="main_header nav-bg">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <NavLink className="navbar-brand" to="/">Rohit <span>App</span></NavLink>
                        <button className="navbar-toggler" type="button"
                         data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                         aria-controls="navbarSupportedContent" aria-expanded="false" 
                         aria-label="Toggle navigation" onClick={() => setShow(!show)}>
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${show ? "show" : ""}`} >
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/service">Services</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                            </li>
              
                        </ul>
                        <form className="d-flex header_btn">
                            <button className="btn sign_btn"  type="submit">SignUp</button>
                            <button className="btn log_btn"  type="submit">Login</button>
                        </form>
                        </div>
                    </div>
                </nav>
           </section>
        </>
    )
}

export default Navbar