import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim() === "") return; // prevent empty todos
    setTodos((todos) => [
      ...todos,
      {
        text: input,
        id: Math.floor(Math.random() * 10000),
      },
    ]);
    setInput("");
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  };

  return (
    <div className="flex flex-col gap-6 justify-center min-h-screen items-center bg-amber-400">
      <h1 className="font-bold text-4xl border-4 border-b-cyan-300 border-t-cyan-300">
        Todo List
      </h1>
      <input
        className="border border-amber-950 p-4"
        type="text"
        placeholder="new todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="border-8 rounded-4xl border-amber-700 cursor-pointer"
        onClick={() => handleSubmit()}
      >
        Submit
      </button>
      <ul className=" text-teal-300 gap-1">
        {todos.map(({ text, id }) => (
          <li key={id}>
            <span className=" text-teal-300 m-4">{text}</span>
            <button
              className="border-2 rounded-2xl text-blue-500 border-amber-900"
              onClick={() => removeTodo(id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
