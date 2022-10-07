import React from "react";
import ShowSection from "../ShowSection/ShowSection";
import './Steps.css'

const Steps = () => {
  return (
    <div className="show-section">
      <section className="steps" id="steps">
        <div className="container">
          <div className="mx-ato col-md-12 clo-lg-7">
            <ShowSection></ShowSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Steps;
