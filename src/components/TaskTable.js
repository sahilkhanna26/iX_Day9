import React from 'react'

export default function TaskTable(props) {
  return (
    <div>
        <table class="table">
  <thead>
    <tr>
      <th>Task</th>
      <th>Complete</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr> */}
    {props.tasks.map((task)=> 
    <tr key ={task.id}>

    <td>{task.name}</td>
    <td>
    <div classname="form-check text-center" onClick={(e) => props.onTaskCompleteToggle(task.id)}>
        <input classname="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        <label classname="form-check-label" for="flexCheckDefault">
        </label>
</div>
        {/* {task.complete? 'yes':'No'} */}
    </td>
    <td>
    <div onClick={() => props.onTaskRemove(task.id)}>
                    <i className="bi bi-trash"></i>
    </div>
    </td>
    
  </tr> 
    )
    }
   
  </tbody>
</table>
    </div>
  )
}
