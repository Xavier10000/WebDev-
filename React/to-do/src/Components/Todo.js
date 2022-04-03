import React from 'react'

const Todo = ({title,isCompleted}) => {
  
   
    return (    
    <li>
        <input type="checkbox" defaultChecked={isCompleted}/>
        <span>{title}</span>
        
    </li>
  )
}

export default Todo