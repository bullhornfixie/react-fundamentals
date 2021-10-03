import { render } from "@testing-library/react";
import React from "react"
import AppTest from "./AppTest"

test("renders an h1", () => {
  const { getByText } = render(<AppTest />);
  const h1 = getByText(/Hello React Testing Library/);
  expect(h1).toHaveTextContent(
      "Hello React Testing Library"
  );
});

// give test a name "renders an h1"
// setup a query { getByText } - reaches out to an element and get some information about it 
// use a matcher .toHaveTextContent to see if matches 