import React from 'react'
import useTaskContext from '../context/useTaskContext'

function TaskShow({task}) {
     const {deleteTask}= useTaskContext();
     const handleClick=(event)=>{
        deleteTask(task.id)
     }
  return (
    <div>
        {task.task}
        <button onClick={handleClick}> X </button>
    </div>
  )
}

export default TaskShow