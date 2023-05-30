import React, { useState } from "react";

import { btnData } from "./data/btnData";
import Button from "./components/button";



function App() {
  const [display, setDisplay] = useState("Please press button");

  function updateDisplay(token) {
    if (display === "Please press button") {
      setDisplay(token);
    } else {
      setDisplay(display + token);
    }
  }

  function calculate() {
    const results = eval(display);
    setDisplay(results);
  }

  function handleButtonClick(token) {
    if (token === "=") {
      calculate();
    } else if (token === "C") {
      setDisplay("Please press button");
    } else {
      updateDisplay(token);
    }
  }

  return (
    <section className="w-screen h-screen justify-center items-center flex flex-col">
      <div className="w-1/2 p-5  bg-gray-200 rounded shadow">
        <h1 className="text-center sm:text-3xl font-bold">Calculator</h1>
        <div className="bg-white p-2 my-4">{display}</div>
        <div className="grid grid-cols-4 gap-2 ">
          {btnData.map((token, index) => (
            <Button
              key={index}
              onClick={() => handleButtonClick(token)}
              extraClass="text-lg font-semibold"
            >
              {token}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default App;
