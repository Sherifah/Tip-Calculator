import React from "react";
import TipCalculator from "./Components/TipCalculator";

const App = () => {
  return (
    <div className="font-body font-bold pb-0 md:pb-12">
      <TipCalculator />
      <div className="attribution md:bg-body bg-white">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/Sherifah">SherryDev</a>.
      </div>
    </div>
  );
};

export default App;
