import React from "react";

function Percentage({ onTipCalculation, bill, item, people, selected }) {
  const isSelected = item === selected;

  return (
    <button
      className={`btn ${
        isSelected ? "bg-btn text-secondary-100" : "bg-dark text-secondary-400"
      }`}
      onClick={() => onTipCalculation(bill, people, item)}
    >
      {item}%
    </button>
  );
}

export default Percentage;
