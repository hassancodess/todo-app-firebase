import React from 'react'
import TodoItem from './TodoItem'
import { AnimatePresence, motion } from 'framer-motion'
function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <AnimatePresence>
      <div className='flex flex-col justify-center items-center space-y-3  '>
        {todos.map((todo, index) => (
          <motion.div
            className='w-full items-center flex flex-col'
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <TodoItem
              key={index}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  )
}

export default TodoList
