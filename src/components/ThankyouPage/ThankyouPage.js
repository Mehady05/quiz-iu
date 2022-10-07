import React from "react";
import "./ThankyouPage.css";

const ThankyouPage = ({score}) => {
  return (
      <div class="row">
        <div class="col-md-6 mx-auto">
          <div class="thankyou-page-inner">
            <div class="wrapper">
              <div class="tick">
                <div class="done-tick"></div>
                <i class="fa-solid fa-check"></i>
              </div>
              <h2>Thank you For participating in this Examination</h2>
              <h3>Your Score is {score}</h3>
              <p>Please check your english level.......</p>
              <div class="next-prev-btn">
                <button class="next back">Back Home</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ThankyouPage;
