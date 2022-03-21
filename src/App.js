import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoItems from './components/TodoItems';

function App() {
  const [todos, setTodos] = useState([{
    index: 0,
    title: 'the title',
    completed: false,
  }]);

  const toggleCompletion = (index) => {
    setTodos(todos.map((todo) => {
      if (todo.index === index)
        todo.completed = !todo.completed;
      return todo;
    }));
  }

  const deleteTodo = (index) => {
    setTodos(todos
      .filter((todo) => todo.index !== index)
      .map((todo, indexInList) => ({ ...todo, index: indexInList }))
    );
  }

  const addNewTodo = (title) => {
    const index = todos.length;
    const completed = false;

    setTodos(todos.concat({
      index,
      title,
      completed,
    }))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDos</h1>
        <TodoInput addNewTodo={addNewTodo} />
        <ul>
          <TodoItems todos={todos} toggleCompletion={toggleCompletion} deleteTodo={deleteTodo} />
        </ul>
      </header>
    </div>
  );
}

export default App;
