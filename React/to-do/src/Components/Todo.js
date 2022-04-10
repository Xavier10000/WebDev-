import React from 'react'

const Todo = ({id,title,isCompleted,deleteTodo}) => {
  
    // const DeleteHandler = (id)=>{
    //     deleteTodo(id);
    // } 
    
    return (    
    <li>
        <input type="checkbox" defaultChecked={isCompleted}/>
        <span>{title}</span>
        <button onClick={()=>deleteTodo(id)}>Delete</button>
    </li>
  )
}

export default Todo