import { add } from "./add";

// write total fn that takes in shipping and a subtotal, that return a dollar sign, calls add, and adds in shipping and subtotal
// create a test that tests this

export const total = (shipping, subtotal) => {
  return "$" + add(shipping, subtotal);
};
