import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import ToDoContainer from './components/ToDoContainer/ToDoContainer.jsx';

const createTask = ( view, name ) => {
  // Changes value of new task name input
  const newTaskName = view.getByRole('textbox')
  fireEvent.change(newTaskName, {target: {value: name}})
  
  // Clicks the add button
  const addButton = view.getByText('+')
  fireEvent.click(addButton)
}

const checkTask = ( view ) => {
  // Gets new task by the test name
  const newTaskCheckbox = view.getByRole('checkbox')
  fireEvent.click(newTaskCheckbox)

  return newTaskCheckbox
}

it('should display a new task once added', () => {
  const view = render(<App />)
  
  const taskName = 'test app'
  createTask(view, taskName)

  // Gets new task by the test name
  const newTask = view.getByText(taskName)

  expect(newTask).toBeInTheDocument()
})
  
it('should allow the user to check off tasks', () => {
  const view = render(<App />)
  
  const taskName = 'test app'
  createTask(view, taskName)

  const checkbox = checkTask(view)

  expect(checkbox).toBeChecked()
})

it('should allow the user to clear completed tasks', () => {
    const view = render(<App />)
    
    const taskName = 'test app'
    createTask(view, taskName)
  
    // Gets new task by the test name
    checkTask(view)

    const clearButton = view.getByText('Clear Completed')
    fireEvent.click(clearButton)

    const testTask = view.queryByText(taskName)
  
    expect(testTask).toBeNull()
})
