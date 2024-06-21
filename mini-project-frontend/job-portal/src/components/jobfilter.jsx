import React, { useState } from 'react';
import '../styles/jobfilter.css';

const JobFilter = ({ handleFilter }) => {
    const [filters, setFilters] = useState({
        title: "",
        location: "",
        datePosted: "",
        estimatedSalary: "",
        jobType: "",
        education: "",
        workShifts: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value
        }));
    };

    const handleDropdownChange = (name, value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleFilter(filters);
    };

    return (
        <section className="job-filter">
            <h1 className="heading">Filter Jobs</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex">
                    <div className="box">
                        <p>Job Title</p>
                        <input 
                            type="text" 
                            name="title" 
                            placeholder="Keyword, category or job title"  
                            maxLength="20" 
                            value={filters.title}
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="box">
                        <p>Job Location</p>
                        <input 
                            type="text" 
                            name="location" 
                            placeholder="City, state or country" 
                            maxLength="50" 
                            value={filters.location}
                            onChange={handleChange} 
                        />
                    </div>
                </div>
                <div className="dropdown-container">
                    <div className="dropdown">
                        <input 
                            type="text" 
                            readOnly 
                            placeholder="Date Posted" 
                            name="datePosted" 
                            className="output"
                            value={filters.datePosted}
                            onClick={() => handleDropdownChange("datePosted", "")}
                        />
                        <div className="lists">
                            {["Today", "3 days ago", "7 days ago", "10 days ago", "15 days ago", "30 days ago"].map((item) => (
                                <p 
                                    key={item} 
                                    className="items" 
                                    onClick={() => handleDropdownChange("datePosted", item)}>
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="dropdown">
                        <input 
                            type="text" 
                            readOnly 
                            placeholder="Estimated Salary" 
                            name="estimatedSalary" 
                            className="output"
                            value={filters.estimatedSalary}
                            onClick={() => handleDropdownChange("estimatedSalary", "")}
                        />
                        <div className="lists">
                            {["1k or less", "1k - 5k", "5k - 10k", "10k - 20k", "20k - 30k", "30k - 40k", "40k - 50k", "50k - 1 lakh", "1 lakh - 5 lakh", "5 lakh - 10 lakh", "10 lakh - 20 lakh", "20 lakh - 50 lakh", "50 lakh - 1 crore", "1 crore - 5 crore", "5 crore - 10 crore", "10 crores or above"].map((item) => (
                                <p 
                                    key={item} 
                                    className="items" 
                                    onClick={() => handleDropdownChange("estimatedSalary", item)}>
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="dropdown">
                        <input 
                            type="text" 
                            readOnly 
                            placeholder="Job Type" 
                            name="jobType" 
                            className="output"
                            value={filters.jobType}
                            onClick={() => handleDropdownChange("jobType", "")}
                        />
                        <div className="lists">
                            {["Full-time", "Part-time", "Internship", "Contract", "Temporary", "Fresher"].map((item) => (
                                <p 
                                    key={item} 
                                    className="items" 
                                    onClick={() => handleDropdownChange("jobType", item)}>
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>
                    
                    <div className="dropdown">
                        <input 
                            type="text" 
                            readOnly 
                            placeholder="Work Shifts" 
                            name="workShifts" 
                            className="output"
                            value={filters.workShifts}
                            onClick={() => handleDropdownChange("workShifts", "")}
                        />
                        <div className="lists">
                            {["morning Shift", "Night Shift", "Flexible Shift", "Fixed Shift"].map((item) => (
                                <p 
                                    key={item} 
                                    className="items" 
                                    onClick={() => handleDropdownChange("workShifts", item)}>
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn">Filter</button>
            </form>
        </section>
    );
}

export default JobFilter;
