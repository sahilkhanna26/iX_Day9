import React, {useState} from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

import './App.css';

import {Task} from './models/task'


import TaskInput from './components/TaskInput';
import TaskTable from './components/TaskTable';


export default function App() {

  const[tasks, setTasks]= useState([
    // new Task(1,'Test 1', false),
    // new Task(2,'Test 2', false),
  ]);

  function onTaskCreate(name){
    const task = new Task(
      new Date().getTime(),
      name,
      false,
    )

    //tasks.push(task)
    
    setTasks([...tasks,task]);
  }

  function onTaskCompleteToggle(taskid){
   const taskToToggle =  tasks.find((task)=>task.id === taskid);
   taskToToggle.complete = !taskToToggle.complete;

   setTasks(tasks.map((task)=>{
     return task.id===taskid? taskToToggle:task;
   }));

  }

  function onTaskRemove(taskid){
   
    setTasks(tasks.filter((task)=>task.id!==taskid));
 

  }


  return (
    <div className='container my-4'>
      <div className='card card-body text-center'>

        <h1>Task List</h1>
        <hr></hr>

        <p>Our simple task list</p>
        <TaskInput onTaskCreate={onTaskCreate}/>
        <TaskTable  onTaskCompleteToggle={onTaskCompleteToggle}
          onTaskRemove={onTaskRemove}
          tasks={tasks} />
      </div>
    </div>
  )
}
