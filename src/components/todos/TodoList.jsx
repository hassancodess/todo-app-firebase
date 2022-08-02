import React from 'react'
import TodoItem from './TodoItem'
function TodoList({ todos, toggleComplete }) {
  return (
    <div>
      <div className='flex flex-col justify-center items-center space-y-3  '>
        {todos.map((todo, index) => {
          return (
            <TodoItem key={index} todo={todo} toggleComplete={toggleComplete} />
          )
        })}
      </div>
    </div>
  )
}

export default TodoList
