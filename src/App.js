import { useState } from 'react';
import './App.css';
import TodoItems from './components/TodoItems';

function App() {
  const [todos, setTodos] = useState([{
    index: 0,
    title: 'the title',
    completed: false,
  }]);

  const toggleCompletion = (index) => {
    setTodos(todos.map((todo) => {
      let newCompleted = todo.completed;
      if (todo.index === index)
        newCompleted = !todo.completed;
      return { ...todo, completed: newCompleted };
    }));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDos</h1>
        <form>
          <input type="text" name="new-todo-title"></input>
          <input type="submit"></input>
        </form>
        <ul>
          <TodoItems todos={todos} toggleCompletion={toggleCompletion} />
        </ul>
      </header>
    </div>
  );
}

export default App;
