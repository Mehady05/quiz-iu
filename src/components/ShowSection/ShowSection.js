// import React, { useState } from "react";
import Clock from "../Clock/Clock";
import StepsInner from "../StepsInner/StepsInner";
import "./ShowSection.css";

const ShowSection = () => {
  // const[minute, setminute] = useState();
  // const[second, setSecond] = useState();
  return (
    <div className="show-section">
      <Clock></Clock>
      <StepsInner></StepsInner>
    </div>
  );
};

export default ShowSection;
