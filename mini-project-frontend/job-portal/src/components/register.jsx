import React, { useState } from 'react';
import axios from 'axios'; // Ensure axios is installed and imported
import Header from './header';
import Footer from './footer';
import { Link } from 'react-router-dom';
import "../styles/loginregister.css";

const Register = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        c_pass: ''
    });
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/register', values);
            setMessage(response.data.message);
        } catch (err) {
            console.error('Error during registration:', err.response ? err.response.data : err.message);
            setErrors(err.response ? err.response.data : { error: err.message });
        }
    };

    return (
        <>
            <Header />
            <div className="account-form-container">
                <section className="account-form">
                    <form onSubmit={handleSubmit}>
                        <h3>Create New Account</h3>
                        <input
                            type="text"
                            required
                            name="name"
                            maxLength="20"
                            className="input"
                            placeholder="Enter your name"
                            value={values.name}
                            onChange={handleInput}
                        />
                        <input
                            type="email"
                            required
                            name="email"
                            maxLength="50"
                            className="input"
                            placeholder="Enter your email"
                            value={values.email}
                            onChange={handleInput}
                        />
                        <input
                            type="password"
                            required
                            name="password"
                            maxLength="20"
                            className="input"
                            placeholder="Enter your password"
                            value={values.password}
                            onChange={handleInput}
                        />
                        <input
                            type="password"
                            required
                            name="c_pass"
                            maxLength="20"
                            className="input"
                            placeholder="Confirm your password"
                            value={values.c_pass}
                            onChange={handleInput}
                        />
                        <input type="submit" value="Register Now" name="submit" className="btn" />
                        {message && <p className="message">{message}</p>}
                        {errors.error && <p className="error">{errors.error}</p>}
                        <p> <Link to="/login">Already have an account</Link></p>
                    </form>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default Register;
