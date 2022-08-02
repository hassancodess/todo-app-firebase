import { BsPlusLg } from 'react-icons/bs'
function AddTodo() {
  const style = {
    container: `flex flex-col items-center justify-center w-full space-y-1 md:flex-row md:space-y-0 md:space-x-2 max-w-xl  mx-auto `,
    input: `input w-full input-md`,
    btn: `btn btn-md btn-square md:btn-circle w-full`,
  }
  return (
    // Container
    <div className={style.container}>
      {/* Input */}
      <input type='text' placeholder='Type here' className={style.input} />
      {/* Button */}
      <button className={style.btn}>
        <BsPlusLg color='white' size={18} />
      </button>
    </div>
  )
}

export default AddTodo
