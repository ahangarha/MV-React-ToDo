import React from 'react'
import PropTypes from 'prop-types'

function TodoItem({todo, toggleCompletion, deleteTodo}) {
  return (
    <li>
      <label>
        <input type="checkbox" checked={todo.completed} onChange={() => toggleCompletion(todo.index)} />
        {todo.title}
      </label>
      <button type="button" className='btn' onClick={()=>deleteTodo(todo.index)}>
      Delete
      </button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object,
}

export default TodoItem
