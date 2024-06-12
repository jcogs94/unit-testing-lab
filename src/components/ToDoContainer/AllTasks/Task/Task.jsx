import './Task.css'

const Task = ({ task }) => {
    const handleCheck = () => {
        
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
