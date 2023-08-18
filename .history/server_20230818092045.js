const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

// Replace these with your actual email settings
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});

app.post('/api/contact', (req, res) => {
  const formData = req.body;
  
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'destination-email@example.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
