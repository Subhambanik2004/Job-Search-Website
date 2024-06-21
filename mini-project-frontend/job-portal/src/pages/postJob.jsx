import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import axios from 'axios';
import "../styles/postJob.css"; // Import CSS for post job page

const PostJob = () => {
    const [job, setJob] = useState({
        companyName: '',
        jobTitle: '',
        location: '',
        estimatedSalary: '',
        jobType: '',
        timings: '',
        website: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJob({ ...job, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/jobs', job);
            alert('Job posted successfully');
            // Clear form
            setJob({
                companyName: '',
                jobTitle: '',
                location: '',
                estimatedSalary: '',
                jobType: '',
                timings: '',
                website: ''
            });
        } catch (error) {
            console.error('There was an error posting the job:', error);
            alert('Error posting job');
        }
    };

    return (
        <>
            <Header />
            <div className="post-job-container">
                <div className="box">
                    <form onSubmit={handleSubmit}>
                        <h2>Post a Job</h2>
                        <div className="form-group">
                            <label htmlFor="companyName">Company Name</label>
                            <input
                                type="text"
                                id="companyName"
                                name="companyName"
                                className="input"
                                required
                                value={job.companyName}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="jobTitle">Job Title</label>
                            <input
                                type="text"
                                id="jobTitle"
                                name="jobTitle"
                                className="input"
                                required
                                value={job.jobTitle}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="location">Location</label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                className="input"
                                required
                                value={job.location}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="estimatedSalary">Estimated Salary</label>
                            <input
                                type="text"
                                id="estimatedSalary"
                                name="estimatedSalary"
                                className="input"
                                required
                                value={job.estimatedSalary}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="jobType">Job Type</label>
                            <select
                                id="jobType"
                                name="jobType"
                                className="input"
                                required
                                value={job.jobType}
                                onChange={handleChange}
                                autoComplete="off"
                            >
                                <option value="">Select Job Type</option>
                                <option value="full-time">Full-time</option>
                                <option value="part-time">Part-time</option>
                                <option value="contract">Contract</option>
                                <option value="internship">Internship</option>
                                <option value="temporary">Temporary</option>
                                <option value="fresher">Fresher</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="timings">Timings</label>
                            <select
                                type="text"
                                id="timings"
                                name="timings"
                                className="input"
                                required
                                value={job.timings}
                                onChange={handleChange}
                                autoComplete="off"
                            >
                                <option value="">Select Job Timings</option>
                                <option value="Morning-Shift">Morning Shift</option>
                                <option value="Night -Shift">Night Shift</option>
                                <option value="Flexible-Shift">Flexible Shift</option>
                                <option value="Fixed-Shift">Fixed Shift</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="website">Website Link</label>
                            <input
                                type="text"
                                id="website"
                                name="website"
                                className="input"
                                required
                                value={job.website}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                        </div>
                        <button type="submit" className="btn">Post Job</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default PostJob;
