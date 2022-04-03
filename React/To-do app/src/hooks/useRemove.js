import {useState} from "react";

const useRemove = (Person)=>{

    const[value,setPersons]=useState(Person);

    setPersons(value.filter((e) => {
        return e!==Person;

    }));
    console.log("Delete person",Person);
}

export default useRemove