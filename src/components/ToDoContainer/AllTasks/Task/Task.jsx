import './Task.css'

const Task = ({ task, tasks, setTasks }) => {
    const handleCheck = () => {
        let newTasks = [...tasks]
        newTasks.forEach( (oldTask) => {
            if (oldTask.task === task.task) {
                oldTask.completed = !oldTask.completed
            }
        })
        setTasks(newTasks)
    }
    
    return <>
        <div className="task">
            <input type="checkbox"
                checked={task.completed === true ? 'checked' : null}
                onChange={handleCheck} />
            <p>{task.task}</p>
        </div>
    </>
}

export default Task
