import React, { useEffect, useState } from "react";
import axios from "axios";
import AddReview from "./addreviews";
import "../styles/reviewsSection.css";

const ReviewsSection = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // Fetch reviews from the backend
        axios.get("http://localhost:5000/reviews")
            .then((response) => {
                setReviews(response.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the reviews!", error);
            });
    }, []);

    const handleAddReview = (newReview) => {
        axios.post("http://localhost:5000/add-review", newReview)
            .then((response) => {
                setReviews((prevReviews) => [...prevReviews, newReview]);
            })
            .catch((error) => {
                console.error("There was an error adding the review!", error);
            });
    };

    return (
        <div>
            <div className="section-title">Top Reviews</div>
            <section className="reviews">
                <div className="box-container">
                    <div className="box">
                        <h2 className="title">Amazing Results</h2><br />
                        <p>With amazing results, this online job portal offers a seamless, easy-to-use platform. I got selected swiftly, making my experience truly nice </p><br />
                        <div className="user">
                            <div>
                                <h3>Jeet Gogoi</h3>
                                <span>web designer</span>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <h2 className="title">Easy to use</h2><br />
                        <p>I'm thrilled with the amazing results this job portal delivered. It's easy to use, and I got selected for a perfect role—a truly nice experience. </p><br />
                        <div className="user">
                            <div>
                                <h3>Subham Banik</h3>
                                <span>web designer</span>
                            </div>
                        </div>
                    </div>
                    {reviews.map((review, index) => (
                        <div key={index} className="box">
                            <h2 className="title">{review.title}</h2><br />
                            <p>{review.description}</p><br />
                            <div className="user">
                                <div>
                                    <h3>{review.userName}</h3>
                                    <span>{review.userOccupation}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <AddReview onAddReview={handleAddReview} />
        </div>
    );
};

export default ReviewsSection;
