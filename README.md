Job Search Application
Overview
This Job Search Application is a full-stack web application that allows users to search for jobs, post job listings, and leave reviews. It provides a secure registration and login system, and users can also contact the site administrators via a contact form. The backend is built with Node.js and Express.js, while the frontend is developed using React.


Features
User registration and login with hashed passwords
Posting and searching for job listings
Viewing and adding user reviews
Submitting contact forms
Filtering job listings based on title, location, date posted, salary, job type, education, and work shifts
Motivation and Purpose
This project was built to provide an easy-to-use platform for job seekers and job providers. It aims to streamline the process of finding and posting jobs, making it efficient for users to connect with potential employers or employees. The project solves the problem of manually searching for job listings across different platforms by aggregating them in one place and providing robust filtering options.

Technologies Used
Node.js: JavaScript runtime for server-side execution.
Express.js: Web framework for Node.js to create the server and handle routing.
MySQL: Database management system using mysql2/promise for database interactions.
CORS: Enables Cross-Origin Resource Sharing to handle requests from different origins.
Body-Parser: Middleware to parse incoming request bodies.
Bcrypt: Library for hashing passwords for secure storage.
Helmet: Middleware to set various HTTP headers for security.
React: JavaScript library for building user interfaces.

Database Setup
Library: Uses mysql2/promise for database interactions.
Connection Pool: Manages connections with mysql.createPool().
Configuration: Pool configured with host, user, password, and database (usersdb).
Async Queries: Uses promise-based methods for non-blocking operations.
Users Table: Stores user details (name, email, hashed password).
Jobs Table: Contains job listings (company name, job title, location, salary, job type, shift, description, link).
Reviews and Contacts Tables: Holds reviews (userName, userOccupation, title, description) and contact form submissions (name, email, number, role, message).

API Endpoints
GET /reviews: Fetches and displays user reviews.
POST /add-review: Submits and stores user reviews.
POST /register: Registers new users with hashed passwords.
POST /login: Authenticates users by verifying credentials.
GET /jobs: Retrieves all job listings.
POST /jobs: Adds new job listings.
POST /contact: Handles contact form submissions.

Application Workflow
1. User Registration:
Users submit a registration form.
Server hashes the password using bcrypt.
Stores user details in the database.
Sends success response.

2. User Login:
Users submit login form.
Server fetches user details and verifies password.
Sends success response on valid credentials.

3. Fetching Jobs:
Client sends GET request to /jobs.
Server retrieves job listings from database.
Sends job listings as JSON response.

4. Adding a Job:
Users submit a job posting form.
Server inserts job details into the database.
Fetches updated job list and sends success response.

5. Fetching Reviews:
Client sends GET request to /reviews.
Server retrieves reviews from database.
Sends reviews as JSON response.

6. Adding a Review:
Users submit a review form.
Server inserts review details into the database.
Sends success response.

7. Handling Contact Form Submission:
Users submit the contact form.
Server inserts form data into the database.
Sends success response.

Security Measures
Password Hashing with Bcrypt:
-Passwords hashed before storing in database.
Helmet Middleware:
-Sets various HTTP headers for security.
CORS (Cross-Origin Resource Sharing):
-Controls origins that can access the server.
Input Validation:
-Ensures integrity and security of incoming data.
Error Handling:
-Catches and logs errors, sends appropriate responses.
Secure Database Connection:
-Uses mysql2/promise with environment-specific configurations.



Usage
Register a new user or log in with existing credentials.
Search for jobs using the home page form or filter jobs on the all jobs page.
Post new job listings if logged in as an employer.
View and add reviews on the reviews page.
Submit inquiries via the contact form.
