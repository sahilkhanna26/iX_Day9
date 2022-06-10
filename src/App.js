import React, {useState, useEffect} from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

import {db} from './firebase/firebase';
import './App.css';

import {Task} from './models/task'

import TaskService from './services/task.service'

import TaskInput from './components/TaskInput';
import TaskTable from './components/TaskTable';


export default function App() {

  const[tasks, setTasks]= useState([
    // new Task(1,'Test 1', false),
    // new Task(2,'Test 2', false),
  ]);

  useEffect(()=>{
    if(!tasks.length){
      onInitialLoad();
    }
  },[])

  async function onInitialLoad(){
    const tasks = await TaskService.fetchTasks();
    setTasks(tasks);
  }
  async function onTaskCreate(name){
   const task = await TaskService.createTask(new Task(
      null,
      name,
      false
    )
    )

    //tasks.push(task)
    
    setTasks([...tasks,task]);
  }

  async function onTaskCompleteToggle(taskid){
   const taskToToggle =  tasks.find((task)=>task.id === taskid);
   taskToToggle.complete = !taskToToggle.complete;

   await TaskService.updateTask(taskToToggle);

   setTasks(tasks.map((task)=>{
     return task.id===taskid? taskToToggle:task;
   }));

  }

  async function onTaskRemove(taskid){
   await TaskService.deleteTask(taskid);
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
