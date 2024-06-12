import { useState } from "react"
import AddBar from "./AddBar/AddBar.jsx"
import AllTasks from "./AllTasks/AllTasks.jsx"
import ClearCompletedTasks from "./ClearCompletedTasks/ClearCompletedTasks.jsx"

const ToDoContainer = () => {
    const [tasks, setTasks] = useState([])

    return <>
        <div id="to-do-container">
            <h2>List</h2>
            <AddBar tasks={tasks} setTasks={setTasks} />
            <AllTasks tasks={tasks} setTasks={setTasks} />
            <ClearCompletedTasks tasks={tasks} setTasks={setTasks} />
        </div>
    </>
}

export default ToDoContainer
