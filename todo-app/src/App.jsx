import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  
  const handleAdd = (e) => {
  setTodos([...todos, {todo, iscompleted:false}])
  setTodo("")
  console.log(todos)
  }

  const handleEdit = () => {

  }

  const handleDelete = () => {

  }

  const handleChange = (e) => {
   setTodo(e.target.value)
  }

  return (
    <>
      <Navbar/>
      <div className="container mx-auto my-5 rounded-xl bg-violet-100 p-5 min-h-[80vh]">
         <div className="addtodo my-5">
        <h2 className='text-xl font-bold'>Add todo</h2> 
        <input onChange={handleChange} value={todo} type="text" className='w-3/4' />
      <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950 rounded-md mx-6 py-1 p-2 text-white text-sm font-bold'>Add</button>
      </div>
     
                <h2 className='text-xl font-bold'>Your Todos</h2>
                <div className="todos">
                  {todos.map(item =>{

                  
         return <div className="todo flex">
          <div className={item.iscompleted?"":"line-through"}>{item.todo}</div>
            <div className="buttons">
              <button onClick={handleEdit} className='bg-violet-800 hover:bg-violet-950 rounded-md mx-1 py-1 p-2 text-white text-sm font-bold'>Edit</button>
              <button onClick={handleDelete} className='bg-violet-800 hover:bg-violet-950 rounded-md mx-1 py-1 p-2 text-white text-sm font-bold'>Delete</button>
            </div>
        </div>
      })}
       </div>
        
            </div>
      
    </>
  )
}

export default App
