import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql2/promise'; 
import cors from 'cors';
import bcrypt from 'bcrypt';

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());


// MySQL connection
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'usersdb'
});

// Endpoint to fetch reviews
app.get('/reviews', async (req, res) => {
    try {
        const [results] = await db.query('SELECT * FROM reviews');
        res.json(results);
    } catch (err) {
        console.error('Error fetching reviews:', err);
        res.status(500).json({ error: err.message });
    }
});

// Endpoint to add a review
app.post('/add-review', async (req, res) => {
    const { userName, userOccupation, title, description } = req.body;
    try {
        const query = 'INSERT INTO reviews (userName, userOccupation, title, description) VALUES (?, ?, ?, ?)';
        await db.execute(query, [userName, userOccupation, title, description]);
        res.status(201).json({ message: 'Review added successfully' });
    } catch (err) {
        console.error('Error adding review:', err);
        res.status(500).json({ error: err.message });
    }
});

// Register endpoint
app.post('/register', async (req, res) => {
    const { name, email, password, c_pass } = req.body;

    if (password !== c_pass) {
        return res.status(400).json({ error: 'Passwords do not match' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
        await db.execute(query, [name, email, hashedPassword]);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        console.error('Error during registration:', err);
        res.status(500).json({ error: err.message });
    }
});

//login endpoints
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log('Login attempt:', { email, password });
    try {
        const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
        if (rows.length === 0) {
            console.log('User not found');
            return res.status(400).json({ error: 'User not found' });
        }
        const user = rows[0];
        const isPasswordValid = await bcrypt.compare(password, user.password);
        console.log('Password valid:', isPasswordValid);
        if (!isPasswordValid) {
            console.log('Invalid password');
            return res.status(400).json({ error: 'Invalid password' });
        }
        res.status(200).json({ message: 'Login successful' });
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).json({ error: err.message });
    }
});

// Endpoint to fetch jobs
app.get('/jobs', async (req, res) => {
    try {
        const [results] = await db.query('SELECT * FROM jobs');
        res.json(results);
    } catch (err) {
        console.error('Error fetching jobs:', err);
        res.status(500).json({ error: err.message });
    }
});

// Endpoint to add a job
app.post('/jobs', async (req, res) => {
    const { companyName, jobTitle, location, estimatedSalary, jobType, timings, website } = req.body;
    
    // Log the received job details
    console.log('Received job details:', { companyName, jobTitle, location, estimatedSalary, jobType, timings, website });
    
    try {
        // Perform server-side validation
        if (!companyName || !jobTitle || !location || !estimatedSalary || !jobType || !timings || !website) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Check for undefined values and convert them to null
        const jobDetails = [companyName, jobTitle, location, estimatedSalary, jobType, timings, website].map(field => field === undefined ? null : field);
        
        const query = 'INSERT INTO jobs (companyName, jobTitle, location, estimatedSalary, jobType, timings, website) VALUES (?, ?, ?, ?, ?, ?, ?)';
        await db.execute(query, jobDetails);
        res.status(201).json({ message: 'Job posted successfully' });
    } catch (error) {
        console.error('Error adding job:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route to handle form submission
app.post('/contact', async (req, res) => {
    console.log('Contact form submission received');
    const { name, email, number, role, message } = req.body;
    console.log('Form data:', { name, email, number, role, message });
    const query = 'INSERT INTO contacts (name, email, number, role, message) VALUES (?, ?, ?, ?, ?)';
    try {
        await db.execute(query, [name, email, number, role, message]);
        res.status(201).json({ message: 'Message saved successfully!' });
    } catch (err) {
        console.error('Error saving message:', err);
        res.status(500).json({ error: err.message });
    }
});


import helmet from 'helmet';
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'"],
            styleSrc: ["'self'", 'https://fonts.googleapis.com'],
            fontSrc: ["'self'", 'https://fonts.gstatic.com'],
            imgSrc: ["'self'", 'data:'],
            connectSrc: ["'self'"],
            objectSrc: ["'none'"],
            mediaSrc: ["'self'"],
            frameSrc: ["'self'"]
        }
    }
}));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
