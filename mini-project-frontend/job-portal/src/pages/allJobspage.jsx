import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import Jobs from "../components/all_jobs"; // Ensure this path is correct
import JobFilter from "../components/jobfilter";
import axios from 'axios';

const AllJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    const getInitialFilters = () => {
        const params = new URLSearchParams(location.search);
        return {
            title: params.get('title') || "",
            location: params.get('location') || "",
            datePosted: "",
            estimatedSalary: "",
            jobType: "",
            education: "",
            workShifts: ""
        };
    };

    const [filters, setFilters] = useState(getInitialFilters);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/jobs');
                console.log('Jobs fetched:', response.data); // Debugging line
                setJobs(response.data);
                setFilteredJobs(response.data); // Initially display all jobs
            } catch (error) {
                console.error('There was an error fetching the jobs:', error);
            }
        };

        fetchJobs();
    }, []);

    useEffect(() => {
        handleFilter(filters);
    }, [jobs, filters]);

    const handleFilter = (filters) => {
        console.log('Applying filters:', filters); // Debugging line

        const filtered = jobs.filter(job => {
            console.log('Checking job:', job);
            if (filters.title && !job.jobTitle.toLowerCase().includes(filters.title.toLowerCase())) {
                console.log(`Job ${job.jobTitle} does not match title filter ${filters.title}`);
                return false;
            }
            if (filters.location && !job.location.toLowerCase().includes(filters.location.toLowerCase())) {
                console.log(`Job ${job.location} does not match location filter ${filters.location}`);
                return false;
            }
            if (filters.datePosted) {
                const jobDate = new Date(job.createdAt);
                const currentDate = new Date();
                let dateFilter;
                switch (filters.datePosted) {
                    case "Today":
                        dateFilter = new Date();
                        break;
                    case "3 days ago":
                        dateFilter = new Date(currentDate.setDate(currentDate.getDate() - 3));
                        break;
                    case "7 days ago":
                        dateFilter = new Date(currentDate.setDate(currentDate.getDate() - 7));
                        break;
                    case "10 days ago":
                        dateFilter = new Date(currentDate.setDate(currentDate.getDate() - 10));
                        break;
                    case "15 days ago":
                        dateFilter = new Date(currentDate.setDate(currentDate.getDate() - 15));
                        break;
                    case "30 days ago":
                        dateFilter = new Date(currentDate.setDate(currentDate.getDate() - 30));
                        break;
                    default:
                        dateFilter = null;
                }
                if (dateFilter && jobDate < dateFilter) {
                    console.log(`Job ${job.createdAt} does not match date filter ${filters.datePosted}`);
                    return false;
                }
            }
            if (filters.estimatedSalary) {
                const jobSalary = job.estimatedSalary.toLowerCase().replace(/\s+/g, '');
                const filterSalary = filters.estimatedSalary.toLowerCase().replace(/\s+/g, '');
                console.log(`Job Salary: ${jobSalary}, Filter Salary: ${filterSalary}`);
                if (!jobSalary.includes(filterSalary)) {
                    console.log(`Job ${job.estimatedSalary} does not match salary filter ${filters.estimatedSalary}`);
                    return false;
                }
            }
            if (filters.jobType && !job.jobType.toLowerCase().includes(filters.jobType.toLowerCase())) {
                console.log(`Job ${job.jobType} does not match job type filter ${filters.jobType}`);
                return false;
            }
            if (filters.education && (!job.education || !job.education.toLowerCase().includes(filters.education.toLowerCase()))) {
                console.log(`Job ${job.education} does not match education filter ${filters.education}`);
                return false;
            }
            if (filters.workShifts && !job.timings.toLowerCase().includes(filters.workShifts.toLowerCase())) {
                console.log(`Job ${job.timings} does not match work shifts filter ${filters.workShifts}`);
                return false;
            }
            return true;
        });

        console.log('Filtered jobs:', filtered); // Debugging line
        setFilteredJobs(filtered);
    };

    const resetFilters = () => {
        setFilters({
            title: "",
            location: "",
            datePosted: "",
            estimatedSalary: "",
            jobType: "",
            education: "",
            workShifts: ""
        });
        navigate('/allJobspage');
    };

    return (
        <div>
            <Header />
            <JobFilter handleFilter={handleFilter} />
            <Jobs jobs={filteredJobs} />
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
                <button className="btn" onClick={resetFilters}>All Jobs</button>
            </div>
            <Footer />
        </div>
    );
}

export default AllJobs;
