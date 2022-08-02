import { MdDeleteOutline } from 'react-icons/md'

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <div className='bg-neutral text-neutral-content px-4 py-3 rounded-xl flex space-x-4 items-center justify-between max-w-2xl w-full'>
      <div className='flex space-x-3 items-center '>
        {/* Checkbox */}
        <input
          type='checkbox'
          class='checkbox checkbox-accent'
          checked={todo.completed ? 'checked' : ''}
          onChange={() => toggleComplete(todo)}
        />
        {/* Text */}
        <h1 className={todo.completed ? 'line-through' : ''}>{todo.text}</h1>
      </div>
      {/* Actions */}
      <div>
        <button class='btn btn-circle ' onClick={() => deleteTodo(todo.id)}>
          <MdDeleteOutline size={22} className='text-error' />
        </button>
      </div>
    </div>
  )
}

export default TodoItem
