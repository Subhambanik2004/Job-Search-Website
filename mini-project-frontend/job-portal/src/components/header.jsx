// Header.jsx

import React, { useState } from 'react';
import "../styles/header.css";
import { Link } from 'react-router-dom';

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleNavbar = () => {
        setIsActive(!isActive);
    }

    return (
        <header className="header">
            <section className="flex">
                <div id="menu-btn" className="fas fa-bars-staggered" onClick={toggleNavbar}></div>
                <Link to="/" className="logo"><i className="fas fa-briefcase"></i>Job Search.</Link>

                <nav className={`navbar ${isActive ? 'active' : ''}`}>
                    <Link to="/">Home</Link> 
                    <Link to="/aboutUspage">About Us</Link>
                    <Link to="/allJobspage">All Jobs</Link> 
                    <Link to="/contactUspage">Contact Us</Link> 
                    <Link to="/Accountpage">Account</Link> 
                </nav>

                <div className="PostJobbtn">
                    <Link to="/postJob">Post job</Link>
                </div>
            </section>
        </header>
    );
}

export default Header;
