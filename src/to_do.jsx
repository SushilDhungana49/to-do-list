import React, { useState } from "react";

function ToDo() {
  const [tasks, setTasks] = useState([
    "Do dishes",
    "Brush teeth",
    "Prepare food",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    if (newTask !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
      var taxt = document.getElementById("inputTask").value;
      taxt.value = "";
    }
  }

  function deleteTask(index) {
    const UpdatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(UpdatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const UpdatedTasks = [...tasks];
      [UpdatedTasks[index], UpdatedTasks[index - 1]] = [
        UpdatedTasks[index - 1],
        UpdatedTasks[index],
      ];
      setTasks(UpdatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const UpdatedTasks = [...tasks];
      [UpdatedTasks[index], UpdatedTasks[index + 1]] = [
        UpdatedTasks[index + 1],
        UpdatedTasks[index],
      ];
      setTasks(UpdatedTasks);
    }
  }

  return (
    <div>
      <h1>To Do List</h1>
      <div class="ipLine">
        <input
          id="text"
          type="text"
          placeholder="Enter a task to add"
          onChange={handleInputChange}
          value={newTask}
        ></input>
        <input
          className="add"
          type="button"
          value="Add"
          onClick={addTask}
        ></input>
      </div>
      <br />
      {tasks.map((task, index) => (
        <ul>
          <li key={index}>
            <span className="task">{task} </span>
            <input
              type="button"
              value="Delete"
              onClick={() => deleteTask(index)}
              className="delete"
            ></input>
            <input
              type="button"
              value="👆"
              onClick={() => moveTaskUp(index)}
              className="move"
            ></input>
            <input
              type="button"
              value="👇"
              onClick={() => moveTaskDown(index)}
              className="move"
            ></input>

            <br />
          </li>
        </ul>
      ))}
    </div>
  );
}
export default ToDo;
