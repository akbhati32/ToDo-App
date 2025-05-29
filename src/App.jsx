import Header from "./components/Header"
import './components/style.css'
import ToDoList from "./components/ToDoList"
import { useState } from "react"

function App() {

  // states to manage to-do items
  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editIndex, setEditIndex] = useState(null)

  // Adding tasks
  const handleAdd = ()=>{
    if(task.trim()==='') return
      if(isEditing){    
        const updatedTodos = [...todos]
        updatedTodos[editIndex].text = task
        setTodos(updatedTodos)
        setIsEditing(false)
        setEditIndex(null)
      } 
      else {
        setTodos([...todos, {text: task, completed: false}])
      }
      setTask('')
  }

  // Delete task
  const handleDlt = (index)=>{
    setTodos(todos.filter((_,i) => i!==index))
  }

  // Edit task
  const handleEdit = (index)=>{
    setTask(todos[index].text)
    setIsEditing(true)
    setEditIndex(index)
  }

  // Mark checked
  const handleCheck = (index)=>{
    const updatedTodos = [...todos]
    updatedTodos[index].completed = !updatedTodos[index].completed
    setTodos(updatedTodos)
  }

  return (
    <>
    <div className="container">
      <Header />
      <div>
        <input type="text" value={task} className="text-box" placeholder="Add Task"
          onChange={(e)=> setTask(e.target.value)}
          onKeyDown={(e)=> {
              if(e.key === 'Enter') handleAdd() 
            }}/>
        <button onClick={handleAdd} className="btn">Add</button>
      </div>
      <hr/>
      
      {/* Passing props & functions */}
      <ToDoList list={todos} onDlt={handleDlt} onEdit={handleEdit} onChk={handleCheck}/> 
    </div>
    </>
  )
}

export default App
