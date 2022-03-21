import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

function TodoItems({todos, toggleCompletion}) {
  return (
    <>
    {
      todos.map((todo) => <TodoItem todo={todo} key={todo} toggleCompletion={toggleCompletion} />)
    }
    </>
  )
}

TodoItems.propTypes = {
  todos: PropTypes.array,
}

TodoItems.defaultProps = {
  todos: [],
}

export default TodoItems
