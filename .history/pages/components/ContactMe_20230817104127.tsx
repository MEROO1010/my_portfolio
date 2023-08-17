import React, { useState } from 'react'
import Form from './Form'
import firebase from 'firebase/app'; 
import  "firebase/firestore";

const ContactMe = () => {

  function ContactForm() {
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
  }  
  
  return (
    <div className=" relative py-80      bg-[#19335A]">
          <div className="h-100 ">
        <div>
          <h1 className= " absolute py-20 px-80 mx-16 top-20 left-80 font-raleway font-bold  text-[50px] text-[#FFFCF6]">Contact Me</h1>
          
       </div>
        <Form/>
        </div>
    </div>
  )
}

export default ContactMe;