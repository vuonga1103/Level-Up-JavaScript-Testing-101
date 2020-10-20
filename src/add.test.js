import { add } from "./add";

test("add", () => {
  expect(add(1, 3)).toBe(4);
  expect(add(10, 2)).toBe(12);
});
