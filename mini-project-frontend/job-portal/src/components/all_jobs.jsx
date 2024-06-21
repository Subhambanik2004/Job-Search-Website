import React from 'react';
import "../styles/job_container.css";
import { Link } from 'react-router-dom';

const Jobs = ({ jobs = [] }) => {
    if (!Array.isArray(jobs)) {
        console.error('Jobs is not an array:', jobs); // Debugging line
        jobs = [];
    }

    return (
        <section className="jobs-container">
            <h1 className="heading">Latest Jobs</h1>
            <div className="box-container">
                {jobs.length > 0 ? (
                    jobs.map((job) => (
                        <div className="box" key={job.id}>
                            <div className="company">
                                <img src="/images/icon_1.webp" alt={`${job.companyName} Logo`} />
                                <div>
                                    <h3>{job.companyName}</h3>
                                    <span>{new Date(job.createdAt).toLocaleDateString()}</span>
                                </div>
                            </div>
                            <h3 className="job-title">{job.jobTitle}</h3>
                            <p className="location"><i className="fas fa-map-marker-alt"></i>
                                <span>{job.location}</span></p>
                            <div className="tags">
                                <p><i className="fa-solid fa-indian-rupee-sign"></i> <span>{job.estimatedSalary}</span></p>
                                <p><i className="fas fa-briefcase"></i><span>{job.jobType}</span></p>
                                <p><i className="fas fa-clock"></i><span>{job.timings}</span></p>
                            </div>
                            <div className="flex-btn">
                                <a href={job.website} className="btn" target="_blank" rel="noopener noreferrer">View Details</a>
                                <button type="button" className="fa-regular fa-heart" name="save"></button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No jobs available</p>
                )}
            </div>
        </section>
    );
}

export default Jobs;
