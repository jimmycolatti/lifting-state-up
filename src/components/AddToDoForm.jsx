import { useState } from "react"
import "../App.css"

const AddToDoForm = ({ tasks, setTasks, setTaskCompleted }) => {
  const defaultTaskData = {
    _id: "0z",
    name: "Task",
    description: "Do something important",
    isDone: false,
  }

  const [newTask, setNewTask] = useState(defaultTaskData)

  const changeHandler = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if (newTask.isDone) {
      setTaskCompleted((prevCount) => prevCount + 1)
    }

    setTasks([...tasks, newTask])
  }

  const formStyle = {
    boxShadow: "1px 3px 8px #9E9E9E",
    margin: "15px",
  }

  return (
    <div>
      <form className="form-newToDo" onSubmit={submitHandler} style={formStyle}>
        <label>Task Name: </label>
        <input
          type="text"
          value={newTask.name}
          onChange={changeHandler}
          name="name"
        />

        <label>Task Description: </label>
        <input
          type="text"
          value={newTask.description}
          onChange={changeHandler}
          name="description"
        />

        <label>Is this task completed? </label>
        <input
          type="checkbox"
          value={newTask.isDone}
          onChange={changeHandler}
          name="isDone"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddToDoForm
