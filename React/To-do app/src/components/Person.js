import React, { useState } from 'react';
import styles from './Person.module.css';
import personList from './PersonList';
import DUMMY_PERSONS from './PersonList';
// import useRemove from '../hooks/useRemove';

const Person = ({name,age}) => {

  
  const[value,setPersons]=useState(personList);


  const DeleteHandler=()=>{
  
    console.log("Delete");
    console.log(typeof(DUMMY_PERSONS));
    console.log(typeof(personList));

    setPersons(DUMMY_PERSONS.filter((e) => {
      console.log("Inside filter");
      return e!==Person;
    }));
  };

  return (
      <article className={styles.persons}>
          <h2>Name : {name}</h2>
          <h3>Age : { age }</h3>
          <button onClick={DeleteHandler}>Delete</button>
    </article>
  )
}
export default Person;