// JobCategory.js

import React from 'react';
import "../styles/job_category.css";
const JobCategory = () => {
    return (
        <section className="category">
            <div className="heading">
                <h2>Job Categories</h2>
            </div>
            <div className="box-container">
                <div className="box">
                    <i className="fas fa-code"></i>
                    <h3>Software Development</h3>
                    <span>1234 Jobs</span>
                </div>
                <div className="box">
                    <i className="fas fa-paint-brush"></i>
                    <h3>Graphic Design</h3>
                    <span>567 Jobs</span>
                </div>
                <div className="box">
                    <i className="fas fa-cogs"></i>
                    <h3>Engineering</h3>
                    <span>890 Jobs</span>
                </div>
                <div className="box">
                    <i className="fas fa-chart-line"></i>
                    <h3>Finance</h3>
                    <span>456 Jobs</span>
                </div>
                <div className="box">
                    <i className="fas fa-laptop"></i>
                    <h3>Information Technology</h3>
                    <span>789 Jobs</span>
                </div>
                <div className="box">
                    <i className="fas fa-flask"></i>
                    <h3>Science</h3>
                    <span>345 Jobs</span>
                </div>
                {/* Add more job category boxes as needed */}
            </div>
        </section>
    );
}

export default JobCategory;
