import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

function addBox(boxList) {
  const colorInput = boxList.getByLabelText("Color");
  fireEvent.change(colorInput, { target: { value: 'test-yellow' }});
  const widthInput = boxList.getByLabelText("Width");
  fireEvent.change(widthInput, { target: { value: '500' }});
  const heightInput = boxList.getByLabelText("Height");
  fireEvent.change(heightInput, { target: { value: '500' }});
  const submitButton = boxList.getByText("Add Box");
  fireEvent.click(submitButton);
}

it("renders without crashing", function() {
    render(<BoxList />)
});

it("can add Todo", function() {
  const testBox = render(<BoxList />);
  
  addBox(testBox);
  const box = testBox.container.querySelector('.Box')
  expect(testBox.getByLabelText('Color')).toHaveValue('');
  expect(box).toHaveStyle('backgroundColor: test-yellow');
});