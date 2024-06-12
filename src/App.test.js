import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import ToDoContainer from './components/ToDoContainer/ToDoContainer.jsx';

it('should display a new task once added', () => {
  render(<App />)
  
  // Changes value of new task name input
  const newTaskName = screen.getByRole('textbox')
  fireEvent.change(newTaskName, {target: {value: 'test app'}})

  // Clicks the add button
  const addButton = screen.getByRole('button')
  fireEvent.click(addButton)

  // Gets new task by the test name
  const newTask = screen.getByText('test app')

  expect(newTask).toBeInTheDocument()
})

// it('should allow the user to check off tasks', () => {
//   render(<ToDoContainer />)
//   const containerDiv = screen.getByTestId('to-do-container')
//   expect(containerDiv).toBeInTheDocument()
// })

// it('should allow the user to clear completed tasks', () => {
//   render(<ToDoContainer />)
//   const containerDiv = screen.getByTestId('to-do-container')
//   expect(containerDiv).toBeInTheDocument()
// })
