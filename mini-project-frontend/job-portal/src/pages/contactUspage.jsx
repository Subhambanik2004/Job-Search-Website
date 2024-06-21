import React, { useState } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/contactUs.css'; // Import the CSS file for the ContactUs styles
import axios from 'axios';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        role: 'employee',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/contact', formData);
            alert(response.data);
            // Reset form after submission
            setFormData({
                name: '',
                email: '',
                number: '',
                role: 'employee',
                message: ''
            });
        } catch (error) {
            console.error('There was an error submitting the form:', error);
        }
    };

    return (
        <div>
            <Header />
            <section className="contact">
                <div className="box-container">

                    <div className="box">
                        <i className="fas fa-phone"></i>
                        <a href="tel:1234567890">123-456-7890</a>
                        <a href="tel:1112223334">111-222-3334</a>
                        <a href="tel:1122334455">112-233-4455</a>
                    </div>

                    <div className="box">
                        <i className="fas fa-envelope"></i>
                        <a href="mailto:jobsearch@gmail.com">jobsearch@gmail.com</a>
                    </div>

                    <div className="box">
                        <i className="fas fa-map-marker-alt"></i>
                        <a href="#">Hostel 5, JEC, Garmur, Jorhat, Assam, 785007</a>
                    </div>

                </div>

                <form onSubmit={handleSubmit}>
                    <h3>Drop Your Message</h3>
                    <div className="flex">
                        <div className="box">
                            <p>Name</p>
                            <input 
                                type="text" 
                                name="name" 
                                required 
                                maxLength="20" 
                                className="input" 
                                placeholder="Enter your name" 
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="box">
                            <p>Email</p>
                            <input 
                                type="email" 
                                name="email" 
                                required 
                                maxLength="50" 
                                className="input" 
                                placeholder="Enter your email" 
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="box">
                            <p>Number</p>
                            <input 
                                type="text" 
                                name="number" 
                                required 
                                maxLength="10" 
                                className="input" 
                                placeholder="Enter your number" 
                                value={formData.number}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="box">
                            <p>Role</p>
                            <select 
                                name="role" 
                                required 
                                className="input"
                                value={formData.role}
                                onChange={handleChange}
                            >
                                <option value="employee">Job Seeker (Employee)</option>
                                <option value="employer">Job Provider (Employer)</option>
                            </select>
                        </div>
                    </div>
                    <p>Message</p>
                    <textarea 
                        name="message" 
                        className="input" 
                        required 
                        maxLength="1000" 
                        placeholder="Enter your message" 
                        cols="30" 
                        rows="10"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    <input type="submit" value="Send Message" name="send" className="btn" /> 
                </form>
            </section>
            <Footer />
        </div>
    );
}

export default ContactUs;
