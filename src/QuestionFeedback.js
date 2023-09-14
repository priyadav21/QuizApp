import React from "react";
import PopUp from "./popup";

const QuestionFeedBack = ({ submittedAns, correctAns, onPopUpClose }) => {
  const result =
    submittedAns === correctAns
      ? "Congratulations!!!! Your answer is correct."
      : "Sorry, your answer is incorrect.";
  return (
    <div>
      <PopUp isOpen={true} onClose={onPopUpClose}>
        <h3>{result}</h3>
      </PopUp>
    </div>
  );
};

export default QuestionFeedBack;
