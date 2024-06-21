import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Aboutsection from "../components/about";
import ReviewsSection from "../components/review";
import "../styles/main.css"

const About = () => {
    return(
    <div>
        <Header/>
        <Aboutsection />
        <ReviewsSection />
        <Footer/>
    </div>
       
    )
}
export default About;