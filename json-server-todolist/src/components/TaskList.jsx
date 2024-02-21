import React from 'react'
import useTaskContext from '../context/useTaskContext'
import TaskShow from './TaskShow';

function TaskList() {
    const {tasks}=useTaskContext();
    const renderedTasks= tasks.map((task)=>{
        return <TaskShow task={task} key={task.id}  />
    })
  return (
    <div>
        {renderedTasks}
    </div>
  )
}

export default TaskList