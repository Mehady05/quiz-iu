// import React, { useState } from "react";
import Countdown from "react-countdown";
import StepsInner from "../StepsInner/StepsInner";
import "./ShowSection.css";

const ShowSection = () => {
  const Completionist = () => <span>Time is over!</span>;
  return (
    <div className="show-section text-center">
      <Countdown className="date" date={Date.now() + (60000*30)}>
        <Completionist />
      </Countdown>
    <StepsInner></StepsInner>
    </div>
  );
};

export default ShowSection;
