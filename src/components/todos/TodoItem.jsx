import { MdDeleteOutline } from 'react-icons/md'
function TodoItem({ todo, check }) {
  return (
    <div className='bg-neutral text-neutral-content px-4 py-3 rounded-xl flex space-x-4 items-center justify-between max-w-2xl w-full'>
      <div className='flex space-x-3 items-center '>
        {/* Checkbox */}
        <input type='checkbox' class='checkbox checkbox-accent' />
        {/* Text */}
        <h1>Todo Item</h1>
      </div>
      {/* Actions */}
      <div>
        <button class='btn btn-circle '>
          <MdDeleteOutline size={22} className='text-error' />
        </button>
      </div>
    </div>
  )
}

export default TodoItem
