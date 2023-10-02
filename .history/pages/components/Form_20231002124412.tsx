import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Error sending message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending message');
    }
  };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="text-center">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="relative px-4 py-2 mx-4 my-2 bottom-24 rounded-full h-14 w-80"
        /><br/><br/>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="relative px-4 py-2 mx-4 my-2 bottom-24 rounded-full h-14 w-80"
        /><br/>
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="relative px-4 py-2 mx-14 my-20 bottom-28 rounded-lg h-40 w-80"
        ></textarea>
        <button
          type="submit"
          className="absolute bottom-40 left-60 px-40 py-2 mx-80 my-80 font-raleway text-2xl font-semibold text-white bg-gray-500 w-100 h-14 rounded-full"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;


