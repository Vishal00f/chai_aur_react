import React, { useState } from 'react'
import useTaskContext from '../context/useTaskContext';

function CreateTask() {
    const [todo,setTodo]=useState("");
     const {createTask} = useTaskContext()
    const handleChange=(event)=>{
        setTodo(event.target.value);
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        createTask(todo);
        setTodo("");
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={todo}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default CreateTask