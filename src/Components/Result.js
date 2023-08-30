import React from "react";

function Result({ tip, totalBill, completed, onReset }) {
  return (
    <div className="bg-dark px-8 pt-10 pb-8 rounded-lg w-full">
      <div className="flex flex-col gap-10">
        <div className="each-tip flex justify-between items-center">
          <p className="flex flex-col items-start">
            <span className="text-secondary-400  pb-0">Tip Amount</span>
            <span className="text-xs text-secondary-300">/ person</span>
          </p>
          <h2 className="text-[40px] tracking-tighter text-primary-100">
            ${tip}
          </h2>
        </div>
        <div className="total-tip flex justify-between items-center">
          <p className="flex flex-col items-start">
            <span className="text-secondary-400  pb-0">Total</span>
            <span className="text-xs text-secondary-300">/ person</span>
          </p>
          <h2 className="text-[40px] tracking-tighter text-primary-100">
            ${totalBill}
          </h2>
        </div>
      </div>
      <div className="reset-button pt-8 md:pt-24">
        <button
          className={`w-[100%] text-center uppercase py-2 bg-btn text-secondary-100 hover:opacity-100 rounded ${
            completed ? "opacity-100" : "opacity-20"
          }`}
          onClick={onReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Result;
