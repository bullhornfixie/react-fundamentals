import React from "react";
import { render, fireEvent } from "@testing-library/react"
import { Checkbox } from "./Checkbox";

test("Selecting checkbox", () => {
  const { getByLabelText } = render(<Checkbox />); 
  const checkbox = getByLabelText(/not checked/); 
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
})

// test name "Selecting checkbox"
// label is like an id given to element 
// grab element to be tested 
// execute Event 
// test expected Event outcome 

// when the component first renders checked will be false and returns not checked
// when the box is checked (onChange) the value of clicked = true 