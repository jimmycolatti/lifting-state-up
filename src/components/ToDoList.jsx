import { useState } from "react"
import Task from "./Task"
import Summary from "./Summary"
import AddToDoForm from "./AddToDoForm"

const initialTasks = [
  {
    _id: "1a",
    name: "Trash",
    description: "Empty trash bins in the home and take out the garbage.",
    isDone: false,
  },
  {
    _id: "2b",
    name: "Dishes",
    description: "Empty the dishwasher and put away the clean dishes.",
    isDone: false,
  },
  {
    _id: "3c",
    name: "Make Bed",
    description: "Pick up your pillows and make your bed.",
    isDone: false,
  },
]

const ToDoList = () => {
  const [tasks, setTasks] = useState(initialTasks)
  const [taskCompleted, setTaskCompleted] = useState(0)

  const toggleTask = (id) => {
    let tasksCopy = [...tasks]

    tasksCopy.forEach((task) => {
      if (task._id === id) {
        task.isDone = !task.isDone
        task.isDone
          ? setTaskCompleted((prevCount) => prevCount + 1)
          : setTaskCompleted((prevCount) => prevCount - 1)
      }
    })

    setTasks(tasksCopy)
  }

  return (
    <div>
      <AddToDoForm
        tasks={tasks}
        setTasks={setTasks}
        setTaskCompleted={setTaskCompleted}
      />

      <Summary taskCompleted={taskCompleted} />

      <div className="todo-container">
        {tasks.map((task) => (
          <Task key={task._id} task={task} toggleTask={toggleTask} />
        ))}
      </div>
    </div>
  )
}

export default ToDoList
