import { render, fireEvent } from "@testing-library/react";
import Box from "./Box";

it("renders without crashing", function() {
    render(<Box
      color='test-red'
      width='200'
      height='200'
    />)
});

it("matches snapshot", function() {
    const { asFragment } = render(<Box 
        color='test-red'
        width='200'
        height='200'
    />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("removes box when clicked on", function() {
    const removeBox = jest.fn();
    const { getByText, getByRole } = render(
      <Box
        color='test-red'
        width='200'
        height='200'
        removeBox={removeBox}
      />
    );
    const removeBtn = getByRole('box');
    fireEvent.click(removeBtn);

    expect(removeBox).toHaveBeenCalled();
  });