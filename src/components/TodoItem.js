import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({ todo, toggleCompletion, deleteTodo }) {
  return (
    <li className="todoItem">
      <input type="checkbox" checked={todo.completed} onChange={() => toggleCompletion(todo.index)} />
      <p className={todo.completed ? 'todoTitle done' : 'todoTitle'}>{todo.title}</p>
      <button type="button" className="btn deleteButton" onClick={() => deleteTodo(todo.index)}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    index: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  toggleCompletion: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
