import { render, fireEvent } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

it("renders without crashing", function() {
    render(<NewBoxForm />)
});

it("matches snapshot", function() {
    const { asFragment } = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("works when you submit form", function() {
    const addBoxMock = jest.fn();
    const { getByLabelText, getByRole } = render(<NewBoxForm addBox={addBoxMock}/>)
    const colorInput = getByLabelText("Color");
    fireEvent.change(colorInput, { target: { value: 'test-yellow' }});
    const widthInput = getByLabelText("Width");
    fireEvent.change(widthInput, { target: { value: '200' }});
    const heightInput = getByLabelText("Height");
    fireEvent.change(heightInput, { target: { value: '200' }});
    const addBtn = getByRole('button');
    fireEvent.click(addBtn);

    expect(addBoxMock).toHaveBeenCalled();
  });