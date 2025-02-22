import { useState } from "react";
import { stringCalculator } from "./StringCalculator";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    try {
      setError("");
      setResult(stringCalculator(input));
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 rounded-xl shadow-md">
      <h2 className="text-lg font-bold">String Calculator</h2>
      <input
        type="text"
        className="w-full p-2 border rounded my-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers..."
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleCalculate}
      >
        Calculate
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {result !== null && <p className="text-green-600 mt-2">Result: {result}</p>}
    </div>
  );
}