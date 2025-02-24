const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
require('dotenv').config(); // Load environment variables

// Set up Nodemailer transport using environment variables
const transporter = nodemailer.createTransport({
  service: 'yahoo',
  auth: {
    user: process.env.YAHOO_EMAIL_USER,   // Access the Yahoo email from the .env file
    pass: process.env.YAHOO_EMAIL_PASSWORD // Access the email password from the .env file
  }
});

// Route to handle form submission
router.post('/send-message', async (req, res) => {
    try {
      const { name, email, message } = req.body;
  
      if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
      }
  
      const mailOptions = {
        from: email,
        
        to: process.env.YAHOO_EMAIL_USER,
        subject: `Message from ${name}`,
        text: message,
      };
  
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.response);
  
      res.status(200).json({ message: 'Message sent successfully!' });
  
    } catch (error) {
      console.error('Error sending message:', error);
      res.status(500).json({ error: 'Failed to send message', details: error.message });
    }
  });
  


module.exports = router;
