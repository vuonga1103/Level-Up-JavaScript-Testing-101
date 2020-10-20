import { total } from "./App";
import { add } from "./add";

jest.mock("./add", () => ({
  add: jest.fn(() => 25),
}));

test("total", () => {
  expect(total(20, 5)).toBe("$25");
  expect(add).toHaveBeenCalledTimes(1);

  add.mockImplementation(() => 30);
  expect(total(3, 10)).toBe("$30");
});

// make add into a mock fn, that for example, fetches and returns a num; we need to mock the import/location of dependency, and have a spy fn
// show that we can set up a spy for an internal dependency

// use mockImplementation to change the value of add and assert that total of (5, 25) is $30
