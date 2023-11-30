import React, { useState } from 'react';

const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-24">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          className="flex-grow p-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Add a new task..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
