import React, { useCallback, useState } from 'react'
import axios from 'axios';
import TaskContext from './TaskContext'
function TaskContextProvider({children}) {
    const [tasks,setTasks]=useState([]);
    const fetchTasks=useCallback(async ()=>{
        const response=await axios.get('http://localhost:3000/tasks');
        setTasks(response.data);
      },[]);
    const createTask=async (task)=>{
        const response = await axios.post("http://localhost:3000/tasks",{
            task
        })
        setTasks([...tasks,response.data]);
    }
    const deleteTask=async (id)=>{
        const response= await axios.delete(`http://localhost:3000/tasks/${id}`)
        const updatedTask= tasks.filter((task)=>{
            return task.id!==id;
        }) 
        setTasks(updatedTask);
    }
  return (
    <TaskContext.Provider value={{tasks,fetchTasks,createTask,deleteTask}}> 
        {children}
    </TaskContext.Provider>
  )
}

export default TaskContextProvider