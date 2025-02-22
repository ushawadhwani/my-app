export function stringCalculator(input) {
  if (!input) return 0;

  let delimiter = /,|\n/;
  if (input.startsWith("//")) {
    const parts = input.split("\n");
    delimiter = new RegExp(parts[0].slice(2)); // Extract custom delimiter
    input = parts[1]; // Remaining numbers
  }

  const numbers = input.split(delimiter).map((num) => (isNaN(num) ? 0 : Number(num)));

  const negatives = numbers.filter((num) => num < 0);
  if (negatives.length) {
    throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
  }

  return numbers.reduce((sum, num) => sum + num, 0);
}
