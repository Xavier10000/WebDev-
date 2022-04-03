import React from 'react'
import useFormState from '../Hooks/useFormState'

const Form = (props) => {

    const[titleInp,setTitleInp,resetTitleInp]=useFormState("");

    const formSubmitHandler = (e)=>{
        e.preventDefault();
        props.addTodo(titleInp);
        resetTitleInp();
    }

    return (
        <form onSubmit={formSubmitHandler}>
              <input onChange={setTitleInp} type="text" placeholder="Add Todo" value={titleInp} />
              <button>Add</button>
      </form>
    )
}

export default Form