import React from "react";
import Percentage from "./Percentage";
import CustomTip from "./CustomTip";

function Forms({
  tips,
  bill,
  people,
  setBill,
  setPeople,
  handleTipCalculation,
  selected,
  setSelected,
  customTip,
  setCustomTip,
}) {
  const tipList = tips.map((item, index) => (
    <Percentage
      key={index}
      item={item}
      bill={bill}
      people={people}
      onTipCalculation={handleTipCalculation}
      selected={selected}
      onSelected={setSelected}
    />
  ));

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
      <div className="w-[100%] bill">
        <label htmlFor="Bill" className="block text-sm text-secondary-200 py-1">
          Bill
        </label>
        <div className="input-icon w-[100%]">
          <img
            className="absolute px-3 py-[14px] text-center "
            src="images/icon-dollar.svg"
            alt="form-icon"
          ></img>
          <input
            className="w-[100%] text-right text-[20px] px-3 py-2 bg-form rounded-md text-secondary-100 font-bold placeholder:font-[400] cursor-pointer caret-primary-100 hover:border-primary-100 hover:border-2 "
            type="text"
            placeholder="0"
            value={bill}
            onChange={(e) => setBill(Number(e.target.value))}
          ></input>
        </div>
      </div>
      <div className="w-[100%] people">
        <div className="flex items-end justify-between">
          <label
            htmlFor="number"
            className="block text-sm text-secondary-200 py-1"
          >
            Number of People
          </label>
          {people === 0 && (
            <span className="block text-sm text-red-500 py-1">
              Can't be zero
            </span>
          )}
        </div>

        <div className="input-icon w-[100%]">
          <img
            className="absolute px-3 py-[14px] text-center "
            src="images/icon-person.svg"
            alt="form-icon"
          ></img>
          <input
            className={`w-[100%] text-right text-[20px] px-3 py-2 bg-form rounded-md text-secondary-100 placeholder:font-[400] cursor-pointer caret-primary-100 hover:border-primary-100 hover:border-2 ${
              people === 0 && "border-red-500 border-2"
            }`}
            type="text"
            placeholder="0"
            value={people}
            onChange={(e) => setPeople(Number(e.target.value))}
          ></input>
        </div>
      </div>
      <div className="w-[100%] tip">
        <label
          htmlFor="number"
          className="block text-sm text-secondary-200 py-1"
        >
          Select Tip %
        </label>
        <div className="input-icon w-[100%] grid grid-cols-3 grid-rows-2 gap-3">
          {tipList}
          <CustomTip
            bill={bill}
            people={people}
            customTip={customTip}
            setCustomTip={setCustomTip}
            handleTipCalculation={handleTipCalculation}
          />
        </div>
      </div>
    </form>
  );
}

export default Forms;
