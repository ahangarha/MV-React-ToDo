import { useEffect, useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoItems from './components/TodoItems';

import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState(() => {
    const inLocalStorage = window.localStorage.getItem('reactTodos')
    return JSON.parse(inLocalStorage) || [];
  });

  const toggleCompletion = (index) => {
    setTodos(todos.map((todo) => {
      if (todo.index === index)
        todo.completed = !todo.completed;
      return todo;
    }));
  }

  const deleteTodo = (index) => {
    setTodos(todos.filter((todo) => todo.index !== index));
  }

  const addNewTodo = (title) => {
    const index = uuidv4();
    const completed = false;

    setTodos(todos.concat({
      index,
      title,
      completed,
    }))
  }

  useEffect(() => {
    window.localStorage.setItem(
      'reactTodos',
      JSON.stringify(todos),
    )
  }, [todos]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDos</h1>
        <TodoInput addNewTodo={addNewTodo} />
        <TodoItems todos={todos} toggleCompletion={toggleCompletion} deleteTodo={deleteTodo} />
      </header>
    </div>
  );
}

export default App;
