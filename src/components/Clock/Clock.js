import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Clock.css";

const Clock = () => {
  const red = "#f54e4e";
  const green = "#4aec8c";
  return (
    <div>
      <CircularProgressbar
        value={60}
        text={"60%"}
        styles={buildStyles({
          buildStyles,
          textColor: "#fff",
          pathColor: "red",
          tailColor: "rgba(255,255,255,.2)",
        })}
      />
    </div>
  );
};

export default Clock;
