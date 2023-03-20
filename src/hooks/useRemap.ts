import { useEffect, useState } from "react";

// Define a generic type for the input object
type InputObject<T> = {
  [key: string]: T;
};

// Define a generic type for the output object
type OutputObject<T> = {
  [key: string]: T;
};

// Define a type for the mapping object
type MappingObject = {
  field: string;
  maptofield: string;
};

// Define a custom hook that accepts an input object and an array of mapping objects and returns an output object
function useRemap<T>(
  input: InputObject<T>,
  mappings: MappingObject[]
): OutputObject<T> {
  // Use useState to store the output object
  const [output, setOutput] = useState<OutputObject<T>>({});

  // Use useEffect to update the output object when the input or mappings change
  useEffect(() => {
    // Create an empty output object
    let newOutput: OutputObject<T> = {};

    // Loop through the mappings array
    for (let mapping of mappings) {
      // Get the field and maptofield properties from each mapping object
      let { field, maptofield } = mapping;

      // Get the value from the input object using the field property as the key
      let value = input[field];

      // Assign the value to the output object using the maptofield property as the key
      newOutput[maptofield] = value;
    }

    // Set the output state with the new output object
    setOutput(newOutput);
  }, [input, mappings]);

  // Return the output object
  return output;
}

export default useRemap