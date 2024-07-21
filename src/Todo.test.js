import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo";

it("renders without crashing", function() {
    render(<Todo
      name='test-todo'
    />)
});

it("matches snapshot", function() {
    const { asFragment } = render(<Todo 
      name='test-todo'
    />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("works when you click remove button", function() {
    const removeTodo = jest.fn();
    const { getByText, getByRole } = render(
      <Todo
        name='test-todo'
        removeTodo={removeTodo}
      />
    );
    const removeBtn = getByRole('button');
    fireEvent.click(removeBtn);

    expect(removeTodo).toHaveBeenCalled();
  });