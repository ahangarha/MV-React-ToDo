import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

function TodoItems({ todos, toggleCompletion, deleteTodo }) {
  if (todos.length) {
    return (
      <ul id="todoList">
        {
          todos.map((todo) => <TodoItem
            todo={todo}
            key={todo}
            toggleCompletion={toggleCompletion}
            deleteTodo={deleteTodo}
          />)
        }
      </ul>
    );
  }

  return (
    <div>No todo yet! Add some...</div>
  )
}

TodoItems.propTypes = {
  todos: PropTypes.array,
}

TodoItems.defaultProps = {
  todos: [],
}

export default TodoItems
