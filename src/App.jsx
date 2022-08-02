import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from 'firebase/firestore'
import db from '../src/firebase'
import TodoList from './components/todos/TodoList'
import AddTodo from './components/todos/AddTodo'
import Spinner from './components/shared/Spinner'

function App() {
  // Read Data from Firebase
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      const q = query(collection(db, 'todos'))
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let todoArr = []
        querySnapshot.forEach((doc) => {
          todoArr.push({ ...doc.data(), id: doc.id })
        })
        setLoading(false)
        setTodos(todoArr)
      })
      return () => unsubscribe()
    } catch (error) {
      toast.error(error)
    }
  }, [])

  const toggleComplete = async (todo) => {
    try {
      const todoRef = doc(db, 'todos', todo.id)
      await updateDoc(todoRef, { completed: !todo.completed })
      toast.success('Successful')
    } catch (error) {
      toast.error(error)
    }
  }
  const submitTodo = async (input) => {
    try {
      const todoRef = collection(db, 'todos')
      await addDoc(todoRef, { text: input, completed: false })
      toast.success('Todo added succefully')
    } catch (error) {
      toast.error(error)
    }
  }
  const deleteTodo = async (id) => {
    try {
      const todoRef = doc(db, 'todos', id)
      await deleteDoc(todoRef)
      toast.success('Todo deleted successfully')
    } catch (error) {
      toast.error(error)
    }
  }

  return (
    <>
      <div className='h-screen w-screen p-10 overflow-x-hidden'>
        {/* Card Container */}
        <div className='bg-primary container mx-auto max-w-7xl px-10 py-10 h-full '>
          {/* Heading  */}
          <h1 className='text-center text-3xl uppercase font-bold tracking-wide text-primary-content mb-6 '>
            Firebase Todo App
          </h1>
          {/* Add Todo  */}
          <div className='flex flex-col space-y-6 h-full '>
            <AddTodo submitTodo={submitTodo} />
            {loading && <Spinner />}
            <TodoList
              todos={todos}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
