import React from 'react'
import PropTypes from 'prop-types'

function TodoItem({todo, toggleCompletion}) {
  return (
    <li>
      <label>
        <input type="checkbox" checked={todo.completed} onChange={() => toggleCompletion(todo.index)} />
        {todo.title}
      </label>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object,
}

export default TodoItem
