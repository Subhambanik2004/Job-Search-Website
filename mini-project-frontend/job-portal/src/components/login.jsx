import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Header from './header';
import Footer from './footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import validation from './loginvalidation.jsx';

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Get the navigate function

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = validation(values);
        setErrors(validationErrors);
        if (!validationErrors.email && !validationErrors.password) {
            try {
                const response = await axios.post('http://localhost:5000/login', values);
                setMessage(response.data.message);
                if (response.status === 200) {
                    navigate('/'); // Redirect to home page on successful login
                }
            } catch (error) {
                setMessage(error.response.data.error);
            }
        }
    };

    return (
        <>
            <Header />
            <div className="account-form-container">
                <section className="account-form">
                    <form onSubmit={handleSubmit} method="post">
                        <h3>Welcome Back!</h3>
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
                        {errors.email && <p className="error">{errors.email}</p>}
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
                        {errors.password && <p className="error">{errors.password}</p>}
                        <input type="submit" value="Login Now" name="submit" className="btn" />
                        {message && <p className="message">{message}</p>}
                        <p><Link to="/register">Don't have an account</Link></p>
                    </form>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default Login;
