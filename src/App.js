import React, { useState } from "react";
import "./App.css";

function App() {
  const options = ["cricket", "football", "hockey"];
  const days = ["weekdays", "weekend"];
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedDay, setSelectedDay] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  return (
    <div>
      <h2>Select an option:</h2>
      {options.map((option, index) => (
        <label key={index}>
          <input
            type="radio"
            name="option"
            value={option}
            checked={selectedOption === option}
            onChange={handleOptionChange}
          />
          {option}
        </label>
      ))}
      <h2>Select a day:</h2>
      {days.map((day, index) => (
        <label key={index}>
          <input
            type="radio"
            name="day"
            value={day}
            checked={selectedDay === day}
            onChange={handleDayChange}
          />
          {day}
        </label>
      ))}
      <div>Selected option: {selectedOption}</div>
      <div>Selected day: {selectedDay}</div>
    </div>
  );
}

export default App;
