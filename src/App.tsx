import React from "react";
import useRemap from "./hooks/useRemap";

function App() {
  // Define an example input object
  const input = {
    name: "John",
    surname: "Smith",
    gender: "Male",
    currentdate: "2023-03-18",
  };

  // Define an example array of mapping objects
  const mappings = [
    { field: "name", maptofield: "fullname" },
    { field: "currentdate", maptofield: "todaydate" },
  ];

  // Use the custom hook to get the remapped output object
  const output = useRemap(input, mappings);
// console.log(input)

// console.log(output)
  return (
    <div>
      <h1>Input</h1>
      <pre>{JSON.stringify(input, null, 2)}</pre>
      <h1>Mappings</h1>
      <pre>{JSON.stringify(mappings, null, 2)}</pre>
      <h1>Output</h1>
      <pre>{JSON.stringify(output, null, 2)}</pre>
    </div>
  );
}

export default App