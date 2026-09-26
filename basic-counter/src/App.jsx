import React, { useState } from "react";

const App = () => {
  const [num, setnum] = useState(0);

  const increasing = () => {
    setnum(num + 1);
  };

  const decreasing = () => {
    setnum(num - 1);
  };

  const reset = () => {
    setnum(0);
  }

  return (
    <div className="container">
      <div className="counter-card">
        <h1>
          Counter <span>{num}</span>
        </h1>

        <div className="buttons">
          <button className="increase" onClick={increasing}>
            +
          </button>
          <button className="decrease" onClick={decreasing}>
            −
          </button>
          <div className="reset" onClick={reset}>Reset</div>
        </div>
      </div>
    </div>
  );
};

export default App;
