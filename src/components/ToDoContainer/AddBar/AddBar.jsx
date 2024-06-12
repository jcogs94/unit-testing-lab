import { useState } from "react"
import './AddBar.css'

const AddBar = ({ tasks, setTasks }) => {
    const [newTask, setNewTask] = useState('')
    
    const handleAddTask = () => {
        if (newTask) {
            // let newTaskList = 
            setTasks([ ...tasks, {
                task:  newTask,
                completed: false
            }])
            setNewTask('')
        }
    }

    return <>
        <div id="add-bar">
            <input type="text" placeholder="Enter a new task"
                value={newTask}
                onChange={(e) => { setNewTask(e.target.value) }} />
            <button onClick={handleAddTask}>+</button>
        </div>
    </>
}

export default AddBar
