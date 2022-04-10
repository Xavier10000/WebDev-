import React, { Fragment,useState } from 'react'
import Form from './Form'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid';

const Todoapp = () => {
  
    const Dummy_todos=[
        {
            id: uuidv4(),
            title : "Go to Gym",
            isCompleted : true
        },
        {
            id: uuidv4(),
            title : "Make Dinner",
            isCompleted : false
        },
        {
            id: uuidv4(),
            title : "Learn web",
            isCompleted : false
        },
        {
            id: uuidv4(),
            title : "Play game",
            isCompleted : true
        },
    ]

    const[todos,setTodos]=useState(Dummy_todos);

    const addTodo = (title) => {
        return setTodos((prevState) => {
            return [...prevState, {id:uuidv4(),title:title,isCompleted:false}];
        })
    }
    const deleteTodo = (id)=>{
        return setTodos((prevState)=>{
            return prevState.filter((todo)=>todo.id!==id);
        })
    }


    return (
    <Fragment>
        <section>
            <Form addTodo={addTodo}/>
        </section>
        <section>
            <TodoList todos={todos} deleteTodo={deleteTodo}/>
        </section>
    </Fragment>
  )
}

export default Todoapp