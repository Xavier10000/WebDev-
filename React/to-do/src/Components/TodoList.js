import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {


    const todoList = props.todos.map((todo) => {
        return <Todo key={todo.id} title={todo.title} isCompleted={ todo.isCompleted}/>
    })

  return (
    <ul>
        {todoList}
    </ul>
  )
}

export default TodoList