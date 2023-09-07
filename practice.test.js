import {
  capitalize,
  reverseString,
  Calculator,
  caesarCipher,
  analyzeArray,
} from "./practice";

test("Capitalize an input", () => {
  expect(capitalize("hello world!")).toBe("Hello world!");
});

test("Reverse a string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("Calculator functions", () => {
  const calculator = Calculator;
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.subtract(2, 1)).toBe(1);
  expect(calculator.divide(4, 2)).toBe(2);
  expect(calculator.multiply(2, 2)).toBe(4);
});

test("Caesar Cipher", () => {
  expect(caesarCipher("hello", 1)).toBe("ifmmp");
  expect(caesarCipher("Hello, world!", 1)).toMatch("Ifmmp, xpsme!");
  expect(caesarCipher("Ifmmp, xpsme!", -1)).toMatch("Hello, world!");
});

test("Analyze an array", () => {
  const object = analyzeArray([1, 2, 3, 4, 5]);
  expect(object.average()).toBe(3);
  expect(object.minimum()).toBe(1);
  expect(object.maximum()).toBe(5);
  expect(object.theLength()).toBe(5);
});
