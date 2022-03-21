import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TodoInput({ addNewTodo }) {
  const [title, setTitle] = useState('');

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addNewTodo(title.trim());
    setTitle('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={title} onChange={onChange} placeholder="Add new todo..." />
      <button type="submit" className="btn">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      </button>
    </form>
  );
}

TodoInput.propTypes = {
  addNewTodo: PropTypes.func.isRequired,
};
