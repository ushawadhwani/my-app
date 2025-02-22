import { stringCalculator } from "../StringCalculator";

describe("String Calculator", () => {
  test("returns 0 for an empty string", () => {
    expect(stringCalculator("")).toBe(0);
  });

  test("returns sum of numbers separated by commas", () => {
    expect(stringCalculator("1,2,3")).toBe(6);
  });

  test("handles single number", () => {
    expect(stringCalculator("5")).toBe(5);
  });

  test("ignores non-numeric values", () => {
    expect(stringCalculator("1,a,2,b,3")).toBe(6);
  });

  test("allows custom delimiter", () => {
    expect(stringCalculator("//;\n1;2;3")).toBe(6);
  });

  test("throws error for negative numbers", () => {
    expect(() => stringCalculator("1,-2,3,-4")).toThrow("Negatives not allowed: -2, -4");
  });
});
