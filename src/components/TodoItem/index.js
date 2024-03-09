import React from 'react'

const TodoItem = props => {
  const {todo, deleteTodo} = props
  const {title} = todo
  const onDelete = () => {
    deleteTodo(todo.id)
  }

  return (
    <div>
      <li>
        <p>{title}</p>
        <button onClick={onDelete}>Delete</button>
      </li>
    </div>
  )
}

export default TodoItem
