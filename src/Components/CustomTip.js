import React from "react";

function CustomTip({
  bill,
  people,
  customTip,
  setCustomTip,
  handleTipCalculation,
}) {
  function handleCustomTip(e) {
    setCustomTip(Number(e.target.value));
    handleTipCalculation(bill, people, Number(e.target.value));
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Custom"
        value={customTip}
        onChange={handleCustomTip}
        className="custom-form"
      />
    </div>
  );
}

export default CustomTip;
