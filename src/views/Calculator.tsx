import React, { useState, useEffect } from "react";

import { Resistor } from "./Resistor";
import { Input } from "./Input";
import { BusinessLogic } from "../utils/computeAnswer";
import { Output } from "./Output";

export const Calculator = () => {
  const [resistorColor, setResistorColor] = useState({
    a: "black",
    b: "black",
    c: "black",
    d: "black",
  });

  return (
    <div className="container">
      <h1>Ohm Calculator</h1>
      <Resistor
        bandA={resistorColor.a.split(",")[0]}
        bandB={resistorColor.b.split(",")[0]}
        bandC={resistorColor.c.split(",")[0]}
        bandD={resistorColor.d.split(",")[0]}
      />
      <Input handle={setResistorColor} state={resistorColor} />
      <Output
        answer={BusinessLogic.calculateOhmValues(
          resistorColor.a,
          resistorColor.b,
          resistorColor.c,
          resistorColor.d,
        )}
      />
    </div>
  );
};
