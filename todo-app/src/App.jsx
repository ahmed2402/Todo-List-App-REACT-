import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
  }
   
  }, [])

  const saveLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  
  
  const handleAdd = (e) => {
  setTodos([...todos, {id: uuidv4(), todo, iscompleted:false}])
  setTodo("")
  console.log(todos)
  saveLS()
  }

  const handleEdit = (e, id) => {
    let t =todos.filter(i=>i.id === id)
      setTodo([t[0].todo])
      let newTodos = todos.filter(item => {
        return item.id !== id
      });
      setTodos(newTodos)
   saveLS();
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)
    saveLS();
  }

  const handleChange = (e) => {
    
   setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    console.log(e,e.target)
    let id = e.target.name;
    let index = todos.findIndex(item =>{
      return item.id === id;
  })
  let newTodos = [...todos];
  newTodos[index].iscompleted = !newTodos[index].iscompleted;
  setTodos(newTodos)
  saveLS();
  }

  const toggleFinished = (e) => { 
    setshowFinished(!showFinished)
  }

  return (
    <>
      <Navbar/>
      <div className=" mx-3 md:container  md:mx-auto my-5 rounded-xl bg-violet-100 p-5 min-h-[80vh] md:w-[35%]">
      <h1 className='font-bold text-center text-3xl'>iTask - Manage your todos at one place</h1>
         <div className="addtodo my-5 flex flex-col gap-4">
        <h2 className='text-2xl font-bold'>Add todo</h2> 
        <div className="flex">
        <input onChange={handleChange} value={todo} type="text" className='w-full rounded-full px-5 py-1' />
      <button onClick={handleAdd} disabled={todo.length<=0} className='bg-violet-800 hover:bg-violet-950 disabled:bg-violet-500 rounded-full mx-2 py-2 p-4 text-white text-sm font-bold'>Save</button>
      </div>
      </div>
      <input className='my-4' id='show' onChange={toggleFinished} type="checkbox" checked={showFinished} /> 
         <label className='mx-2' htmlFor="show">Show Finished</label> 
         <div className='h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2'></div>
     
                <h2 className='text-2xl font-bold'>Your Todos</h2>
                <div className="todos">
                  {todos.length === 0 && <div className='m-5 text-xl font-bold'>No todos to display</div>}
                  {todos.map(item =>{

         return (showFinished || !item.iscompleted) && <div key={item.id} className={"todo flex my-3 justify-between "}>
          <div className='flex gap-5'>
          <input onChange={handleCheckbox} name={item.id} type="checkbox" checked={item.iscompleted}  id="" />
          <div className={item.iscompleted?"line-through":""}>{item.todo}</div>
          </div>
            <div className="buttons flex h-full">
              <button onClick={(e)=> {handleEdit(e, item.id)}} className='bg-violet-800 hover:bg-violet-950 rounded-md mx-1 py-1 p-2 text-white text-sm font-bold'><FaEdit /></button>
              <button onClick={(e)=> {handleDelete(e, item.id)}} className='bg-violet-800 hover:bg-violet-950 rounded-md mx-1 py-1 p-2 text-white text-sm font-bold'><MdDelete /></button>
            </div>
        </div>
      })}
       </div>
        
            </div>
      
    </>
  )
}

export default App
