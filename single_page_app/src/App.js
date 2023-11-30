import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Footer from "./components/Footer";
import Contact from "./components/Contact"
import About from "./components/About"

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <TodoForm onAdd={handleAddTodo} />
                <TodoList todos={todos} onDelete={handleDeleteTodo} />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <Contact></Contact>
            }
          />
          <Route
            path="/about"
            element={
              <About></About>
            }
          />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
