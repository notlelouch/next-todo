"use client";

import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const addTodo = () => {
    if (newTodo.trim() === "") {
      return;
    }

    const newTodoItem: Todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };

    setTodos([...todos, newTodoItem]);
    setNewTodo("");
  };

  const deleteTodo = (id: number) => {
    const udpdatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(udpdatedTodos);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 pt-4">Todo List</h1>
      <div className="flex">
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          value={newTodo}
          onChange={handleInputChange}
        />
        <button
          className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 ml-6 "
          onClick={addTodo}
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Add todo
          </span>
        </button>
      </div>

      <ul className="pt-8">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between border "
          >
            <span className="p-2">{todo.text}</span>
            <button
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4"
              onClick={() => deleteTodo(todo.id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
