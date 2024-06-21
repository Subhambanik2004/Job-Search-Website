import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/home_container.css";

const HomeContent = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        let searchParams = new URLSearchParams(formData).toString();
        
        // Trim any extra spaces from parameters
        const params = new URLSearchParams(searchParams);
        if (params.get('title')) {
            params.set('title', params.get('title').trim());
        }
        if (params.get('location')) {
            params.set('location', params.get('location').trim());
        }
        searchParams = params.toString();

        navigate(`/allJobspage?${searchParams}`);
    };

    return (
        <div className="home-container">
            <section className="home">
                <form onSubmit={handleSubmit}>
                    <h3>find your next job</h3>
                    <p>job title <span></span></p>
                    <input type="text" name="title" placeholder="keyword, category or job title" maxLength="20" className="input" />
                    <p>job location</p>
                    <input type="text" name="location" placeholder="city, state or country" maxLength="50" className="input" />
                    <input type="submit" value="search job" name="search" className="btn" />
                </form>
            </section> 
        </div>
    );
}

export default HomeContent;
