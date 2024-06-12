const ClearCompletedTasks = ({ tasks, setTasks }) => {
    const handleClear = () => {
        let newTasks = []
        tasks.forEach( (task) => {
            if (task.completed === false) {
                newTasks.push(task)
            }
        })
        setTasks(newTasks)
    }
    
    return <>
        <button onClick={handleClear}>Clear Completed</button>
    </>
}

export default ClearCompletedTasks
