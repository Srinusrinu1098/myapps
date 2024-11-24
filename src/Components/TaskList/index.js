import React, { useContext } from "react";
import { TaskContext } from "../../TaskContext";
import './TaskList.css';


const TaskList = () => {
  const { tasks, updateTask, deleteTask, saveTasksToLocalStorage,sortingTheTask} = useContext(TaskContext);

  const handleSortChange = event =>{
    sortingTheTask(event.target.value)
  }

  return (
    <div>
        <div className="display">
      <h2 >Task List</h2>
      <select
        name="status"
        
        onChange={ handleSortChange }
      >
        <option value="All">All</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      </div>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <strong>{task.title}</strong> - {task.status}
              <p>{task.description}</p>
              <p>Due: {task.dueDate}</p>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
              <button onClick={() => updateTask({ ...task, status: "Completed" })}>
                Mark as Completed
              </button>
            </li>
          ))}
        </ul>
       
        
      )}
      
      <button onClick ={saveTasksToLocalStorage}>save</button>
    </div>
  );
};

export default TaskList;
