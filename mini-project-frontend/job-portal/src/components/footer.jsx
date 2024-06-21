import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <section className="grid">
                <div className="box">
                    <h3>quick links</h3>
                    <Link to="/"><i className="fas fa-angle-right"></i>Home</Link>
                    <Link to="/aboutUspage"><i className="fas fa-angle-right"></i>About</Link>
                    <Link to="/allJobspage"><i className="fas fa-angle-right"></i>All Jobs</Link>
                    <Link to="/contactUspage"><i className="fas fa-angle-right"></i>Contact Us</Link>
                </div>
                <div className="box">
                    <h3>extra links</h3>
                    <Link to="/Accountpage"><i className="fas fa-angle-right"></i>Account</Link>
                    <Link to="/login"><i className="fas fa-angle-right"></i>Login</Link>
                    <Link to="/register"><i className="fas fa-angle-right"></i>Register</Link>
                    <Link to="/postJob"><i className="fas fa-angle-right"></i>Post Job</Link>
                    <Link to="#"><i className="fas fa-angle-right"></i>Dashboard</Link>
                </div>
                <div className="box">
                    <h3>follow us</h3>
                    <a href="#"><i className="fab fa-facebook"></i>Facebook</a>
                    <a href="#"><i className="fab fa-twitter"></i>Twitter</a>
                    <a href="#"><i className="fab fa-instagram"></i>Instagram</a>
                    <a href="#"><i className="fab fa-linkedin"></i>LinkedIn</a>
                    <a href="#"><i className="fab fa-youtube"></i>YouTube</a>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
