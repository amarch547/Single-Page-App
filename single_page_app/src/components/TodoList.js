import React from 'react';

const TodoList = ({ todos, onDelete }) => {
  return (
    <ul className="mt-4 space-y-2">
      {todos.map(todo => (
        <li
          key={todo.id}
          className="flex items-center justify-between bg-white p-4 rounded shadow-md"
        >
          <span className="text-lg">{todo.text}</span>
          <button
            className="text-red-500 hover:text-red-700 cursor-pointer"
            onClick={() => onDelete(todo.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
