import TodoList from './components/todos/TodoList'
import AddTodo from './components/todos/AddTodo'
function App() {
  return (
    <div className='h-screen w-screen p-10 overflow-x-hidden'>
      {/* Card Container */}
      <div className='bg-primary container mx-auto max-w-7xl  px-10 py-10 '>
        {/* Heading  */}
        <h1 className='text-center text-3xl uppercase font-bold tracking-wide text-primary-content mb-6'>
          Firebase Todo App
        </h1>
        {/* Add Todo  */}
        <div className='flex flex-col space-y-6 '>
          <AddTodo />
          <TodoList />
        </div>
      </div>
    </div>
  )
}

export default App
