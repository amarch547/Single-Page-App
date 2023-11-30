import React, { useState } from 'react';

const Contact = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Message sent: ${message}`);
    setMessage('');
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          className="w-full p-2 mb-2 border rounded focus:outline-none focus:border-blue-500"
          placeholder="Type your message..."
          value={message}
          onChange={e => setMessage(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
