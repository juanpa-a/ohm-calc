import React, { FC } from "react";
import resistor from "../assets/resistor.png";

export const Resistor: FC<any> = ({ bandA, bandB, bandC, bandD }) => {
  return (
    <div className="resistor">
      <div className="bandA" style={{ backgroundColor: bandA }} />
      <div className="bandB" style={{ backgroundColor: bandB }} />
      <div className="bandC" style={{ backgroundColor: bandC }} />
      <div className="bandD" style={{ backgroundColor: bandD }} />
      <img className="resistor-img" src={resistor} alt="resistor" />
    </div>
  );
};
