import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Form from './Form'; // Import your Form component here

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const db = firebase.firestore(); // Initialize Firestore

      // Add data to a collection (e.g., 'contactMessages')
      await db.collection('contactMessages').add({
        name,
        email,
        message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

      // Clear form fields
      setName('');
      setEmail('');
      setMessage('');

      console.log('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      {/* Your form JSX with input fields and submit button */}
      <form onSubmit={handleSubmit}>
        {/* Input fields for name, email, and message */}
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const ContactMe = () => {
  return (
    <div className="relative py-80 bg-[#19335A]">
      <div className="h-100">
        <div>
          <h1 className="absolute py-20 px-16 top-20 left-80 font-raleway font-bold text-4xl text-[#FFFCF6]">Contact Me</h1>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default ContactMe;
