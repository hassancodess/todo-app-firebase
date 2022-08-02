import { BsPlusLg } from 'react-icons/bs'
import { useState } from 'react'

function AddTodo({ submitTodo }) {
  const style = {
    container: `flex flex-col items-center justify-center w-full space-y-1 md:flex-row md:space-y-0 md:space-x-2 max-w-xl  mx-auto `,
    input: `input w-full input-md`,
    btn: `btn btn-md btn-square md:btn-circle w-full`,
  }
  const [input, setInput] = useState('')
  const onSubmit = (e) => {
    e.preventDefault()
    if (input.trim().length < 1) {
      alert('Input something')
    } else {
      submitTodo(input)
      setInput('')
    }
  }
  return (
    // Container
    <div className={style.container}>
      {/* Input */}
      <input
        type='text'
        placeholder='Type here'
        className={style.input}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {/* Button */}
      <button className={style.btn} onClick={onSubmit}>
        <BsPlusLg color='white' size={18} />
      </button>
    </div>
  )
}

export default AddTodo
