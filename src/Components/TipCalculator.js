import React, { useState } from "react";
import Forms from "./Forms";
import Result from "./Result";

const tips = [5, 10, 15, 25, 50];

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [selected, setSelected] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [tip, setTip] = useState(0.0);
  const [totalBill, setTotalBill] = useState(0.0);
  const [customTip, setCustomTip] = useState("");

  function handleTipCalculation(val, num, rate) {
    if (!bill || !people) return;
    setTip((((val / num) * rate) / 100).toFixed(2));
    setTotalBill((val / num + ((val / num) * rate) / 100).toFixed(2));
    rate === selected ? setSelected(null) : setSelected(rate);
    setCompleted(true);
  }

  function resetHandler() {
    setTip(0.0);
    setTotalBill(0.0);
    setBill("");
    setPeople("");
    setSelected(null);
    setCompleted(false);
    setCustomTip("");
  }

  return (
    <div className="flex flex-col gap-8 items-center justify-center pt-12">
      <div className="flex flex-col text-secondary-100 uppercase tracking-[.25em]">
        <span>Spli</span>
        <span>tter</span>
      </div>
      <div className="w-full md:w-[65%] bg-white p-6 rounded-t-xl md:rounded-xl flex flex-col md:grid md:grid-cols-2 gap-10 items-center justify-center">
        <Forms
          tips={tips}
          bill={bill}
          setBill={setBill}
          setPeople={setPeople}
          people={people}
          handleTipCalculation={handleTipCalculation}
          selected={selected}
          setSelected={setSelected}
          customTip={customTip}
          setCustomTip={setCustomTip}
        />
        <Result
          tip={tip}
          totalBill={totalBill}
          completed={completed}
          onReset={resetHandler}
        />
      </div>
    </div>
  );
}

export default TipCalculator;
