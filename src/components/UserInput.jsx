import { useState } from "react";

export default function UserInput({ valueLabel, valueName, initialValue, onChangeValue }) {
  const [inputValue, setInputValue] = useState(initialValue);

  function handleInput(event) {
    const newValue = event.target.value;
    setInputValue(newValue);
    onChangeValue(valueName, +newValue); 
  }

  return (
    <p>
      <label>{valueLabel}</label>
      <input type="number" required value={inputValue} onChange={handleInput} />
    </p>
  );
}
