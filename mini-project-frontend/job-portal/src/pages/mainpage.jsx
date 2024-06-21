import React from "react";
import Header from "../components/header";
import HomeContent from "../components/home";
import Footer from "../components/footer";
import JobCategory from "../components/job_category";

import ReviewsSection from "../components/review";
import "../styles/main.css"

const MainPage = () => {
    return (
        <div>
            <Header/>
            <HomeContent/>
            <JobCategory />
            <ReviewsSection />
            <Footer/>
        </div>
    );
}

export default MainPage;
