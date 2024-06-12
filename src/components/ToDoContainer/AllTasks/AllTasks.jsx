import Task from "./Task/Task.jsx"
import './AllTasks.css'

const AllTasks = ({ tasks, setTasks }) => {
    return <>
        <div id="task-list">
            { tasks.map( (task) => 
                <Task task={task} setTasks={setTasks} />
            )}
        </div>
    </>
}

export default AllTasks
