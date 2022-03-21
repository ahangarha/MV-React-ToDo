import React, { useState } from 'react'

export default function TodoInput({ addNewTodo }) {
  const [title, setTitle] = useState('');

  const onChange = (e) => {
    setTitle(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    addNewTodo(title.trim());
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={title} onChange={onChange}></input>
      <input type="submit"></input>
    </form>
  )
}
