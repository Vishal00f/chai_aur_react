import React, { useEffect } from 'react'

import useTaskContext from './context/useTaskContext';
import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList';

function App() {
  const {fetchTasks}= useTaskContext()
  useEffect(()=>{
    fetchTasks();
  },[])
  return (
    
    <div>
      <h1>To-do List</h1>
      <CreateTask/>
      <TaskList/>
    </div>

  )
}

export default App