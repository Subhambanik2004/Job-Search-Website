import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/aboutSection.css'; // Import the CSS file for the About page styles

const Aboutsection = () => {
    return (
        <div>
            
            <div className="about-container">
                <div className="section-title">about us</div>
                <section className="about">
                    <img src="images/about-img.svg" alt="" />
                    <div className="box">
                        <h3>Why choose Us?</h3>
                        <p>In today's competitive job market, finding the right platform to kickstart or elevate your career is paramount. 
                            Look no further—our online job portal stands as the ultimate destination for achieving your professional aspirations. 
                            We offer an unparalleled breadth of opportunities spanning various industries, roles, and experience levels, ensuring that there's something for everyone. 
                            Our intuitive platform is designed with your convenience in mind, providing a seamless user experience from start to finish.
                            Say goodbye to endless scrolling and fruitless searches—we leverage cutting-edge technology to deliver personalized job recommendations that match your unique skills and preferences, saving you time and effort. 
                            But our commitment doesn't stop there. We understand that embarking on a job search journey can be daunting, which is why we provide comprehensive resources, including resume-building tools, interview preparation guides, and career development articles, to equip you with the knowledge and tools you need to succeed. 
                            And when you encounter questions or challenges along the way, our dedicated support team is here to assist you with prompt and knowledgeable assistance.
                            With a proven track record of connecting talented individuals with rewarding career opportunities, we're not just a job portal—we're your trusted partner in realizing your professional dreams. 
                            Join us today and unlock the door to a world of endless possibilities.
                        </p>
                        <p>Lorem ipsum dolor sit amet</p>
                        <Link to="/contactUspage" className="btn">Contact Us</Link>
                    </div>
                </section>
                
            </div>
            
        </div>
    );
}

export default Aboutsection;
