import React, { useState, useEffect, useRef } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update your todo"
            value={input}
            name="text"
            className="todo-input edit"
            onChange={(e) => setInput(e.target.value)}
            ref={inputRef}
          />
          <button className="todo-button edit">Update Todo</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a todo"
            value={input}
            name="text"
            className="todo-input"
            onChange={(e) => setInput(e.target.value)}
            ref={inputRef}
          />
          <button className="todo-button">Add Todo</button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
