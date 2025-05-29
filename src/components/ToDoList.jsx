import ToDoItem from "./ToDoItem";

const ToDoList = ({list, onDlt, onEdit, onChk})=>{

  return (
    <>
    <ul className="list">
      {
        list.map((todo,index) => 
          <ToDoItem key={index} task={todo} index={index} 
            onDlt={onDlt} 
            onEdit={onEdit} 
            onChk={onChk}/>)
      }
    </ul>
    </>
    // Rendering list using map
  )
}

export default ToDoList;