import { timesTwo } from "./function"

test("Multiplies by two", () => {
  expect(timesTwo(4)).toBe(8)
});

// any file that ends in test.js will be thought of as a test 
// run `npm test`
// syntax here comes from jest library which comes built in with react 
// "multiplies by two" is the name of the test 
// then we pass a call back function 
// then we use a matcher .toBe
// write test first to fail - this is called test driven development