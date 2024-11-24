import React, { useState, useContext } from "react";
import { TaskContext } from "../../TaskContext";
import './TaskForm.css';


const TaskForm = () => {
  const { addTask} = useContext(TaskContext);
  const [form, setForm] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "Pending",
  });

  

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { ...form, id: Date.now() }; 
    addTask(newTask);
    setForm({ title: "", description: "", dueDate: "", status: "Pending" }); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={form.title}
        onChange={handleInputChange}
        placeholder="Task Title"
        required
      />
      <textarea
        name="description"
        value={form.description}
        onChange={handleInputChange}
        placeholder="Task Description"
        required
      />
      <input
        type="date"
        name="dueDate"
        value={form.dueDate}
        onChange={handleInputChange}
        required
      />
      <select
        name="status"
        value={form.status}
        onChange={handleInputChange}
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit">Add Task</button>

      
      
    </form>
  );
};


export default TaskForm;
