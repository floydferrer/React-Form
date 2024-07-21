import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

function addTodo(todoList, task = "write test") {
  const taskInput = todoList.getByLabelText("Name");
  fireEvent.change(taskInput, { target: { value: task }});
  const submitButton = todoList.getByText("Add Todo");
  fireEvent.click(submitButton);
}

it("renders without crashing", function() {
    render(<TodoList />)
});

it("can add Todo", function() {
  const todoList = render(<TodoList />);
  addTodo(todoList);
  
  expect(todoList.getByLabelText('Name')).toHaveValue('');
  expect(todoList.getByText('write test')).toBeInTheDocument();
});