const express = require('express');
const bodyParser = require('body-parser');
const contactRoute = require('./routes/contactRoute'); // Import the contact route
const cors = require('cors'); // If you need to handle CORS for front-end requests

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors()); // Enable CORS if you're calling the API from a different domain

// Use the contact route
app.use(express.json());
app.use('/api/contact', contactRoute); // Prefix '/api/contact' to the contact route

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
