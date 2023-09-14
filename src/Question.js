import React from "react";
import "./Question.css";

const Question = ({ question, options, selected, handleOptionSelect }) => {
  return (
    <div id="QA-box">
      <div id="question-box">
        <h2>{question}</h2>
      </div>
      <div id="option-box">
        <table>
          {options.map((option, index) => (
            <tr key={index}>
              <label>
                <input
                  type={"radio"}
                  value={option}
                  checked={selected === option}
                  onChange={handleOptionSelect}
                />
                {option}
              </label>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Question;
