import useRemap from "./hooks/useRemap";
import { renderHook } from '@testing-library/react'

describe("useRemap", () => {
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

  // Define an example output object
  const output = {
    fullname: "John",
    todaydate: "2023-03-18",
  };

  // Test if the hook returns an object with keys and values swapped
  it("should return an object with keys and values swapped", () => {
    // Render the hook with the input object and mappings array
    const { result } = renderHook(() => useRemap(input, mappings));
    console.log(result)
    // Expect the result of the hook to equal the output object
    expect(result.current).toEqual(output);
  });
});