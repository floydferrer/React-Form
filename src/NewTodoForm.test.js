import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

it("renders without crashing", function() {
    render(<NewTodoForm />)
});

it("matches snapshot", function() {
    const { asFragment } = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("works when you submit form", function() {
    const addTodoMock = jest.fn();
    const { getByLabelText, getByRole } = render(<NewTodoForm addTodo={addTodoMock}/>)
    const taskInput = getByLabelText("Name");
    fireEvent.change(taskInput, { target: { value: 'test task' }});
    const addBtn = getByRole('button');
    fireEvent.click(addBtn);

    expect(addTodoMock).toHaveBeenCalled();
  });