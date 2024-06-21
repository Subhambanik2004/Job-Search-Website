import React, { useState } from "react";
import "../styles/reviewsSection.css";

const AddReview = ({ onAddReview }) => {
    const [userName, setUserName] = useState("");
    const [userOccupation, setUserOccupation] = useState("");
    const [usershortReview, setUsershortReview] = useState("");
    const [userReview, setUserReview] = useState("");

    const handleNameChange = (e) => setUserName(e.target.value);
    const handleOccupationChange = (e) => setUserOccupation(e.target.value);
    const handleshortReviewChange = (e) => setUsershortReview(e.target.value);
    const handleReviewChange = (e) => setUserReview(e.target.value);

    const handleAddReview = () => {
        const newReview = {
            userName,
            userOccupation,
            title: usershortReview,
            description: userReview,
        };
        onAddReview(newReview);
        setUserName("");
        setUserOccupation("");
        setUsershortReview("");
        setUserReview("");
    };

    return (
        <div className="reviewBox">
            <div>
                <div className="review-title">Add Review</div>
                <section className="reviews"></section>
                <div className="add-review-container">
                    <input
                        type="text"
                        className="review-input"
                        placeholder="Your Name"
                        value={userName}
                        onChange={handleNameChange}
                    />
                    <input
                        type="text"
                        className="review-input"
                        placeholder="Your Occupation (Optional)"
                        value={userOccupation}
                        onChange={handleOccupationChange}
                    />
                    <input
                        type="text"
                        className="review-input"
                        placeholder="Short Review"
                        value={usershortReview}
                        onChange={handleshortReviewChange}
                    />
                    <textarea
                        className="review-input"
                        placeholder="Type your review here..."
                        value={userReview}
                        onChange={handleReviewChange}
                    />
                    <button className="btn" onClick={handleAddReview}>
                        Submit Review
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddReview;
