import './style.css'

const ToDoItem = ({task, index, onDlt, onEdit, onChk})=>{

  return (
    <>
    <li>
      <input type="checkbox" onChange={()=> onChk(index)} checked={task.completed}/>
      <span className={task.completed ? 'completed' : ''}>{task.text}</span>
      <button onClick={()=> onEdit(index)} className='btn'>Edit</button>
      <button onClick={()=> onDlt(index)} className='btn'>Delete</button>
    </li>
    </>
  )
  // Displaying tasks
}

export default ToDoItem;