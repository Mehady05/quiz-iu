import React, { useContext } from "react";
import { QuizContext } from "../Helpers/QuizContext";
import "./ThankyouPage.css";

const ThankyouPage = () => {
  const{score} = useContext(QuizContext)
  return (
      <div class="row">
        <div class="col-md-6 col-sm-12 mx-auto">
          <div class="thankyou-page-inner">
            <div class="wrapper">
              <div class="tick">
                <div class="done-tick"></div>
                <i class="fa-solid fa-check"></i>
              </div>
              <h2>Thank you For participating in this Examination</h2>
              <h3 className="score">Your Score is {score}</h3>
              <p>Please check your english level.......</p>
              {
                score === 50 && <p>C2 advanced</p>
              } 
              {
                (score <= 50 && score >= 40) && <p className="result-main">C1 English level advanced</p>
              } 
              {
                (score <= 40 && score >= 39) && <p className="result-main">B2 English level upper intermediate</p>
              } 
              {
                (score <= 39 && score >= 29) && <p className="result-main">B1 English level intermediate</p>
              } 
              {
                (score <= 29 && score >= 19) && <p className="result-main">A2 English level pre-intermediate</p>
              } 
              {
                (score <= 19 && score >= 10) && <p className="result-main">A1 English level elementary</p>
              } 
              {
                (score <= 9 && score >= 5)  && <p className="result-main">Beginner</p>
              } 
              {
                (score <= 5 && score >= 0)  && <p className="result-main">Absolute Beginner</p>
              } 
              
              {/* <div class="next-prev-btn">
                <button class="next back">Back Home</button>
              </div> */}
            </div>
             <div className="identity">
              <p>Md.Mehedi Hasan</p>
              <p>Junior Front End Developer.</p>
              <p>MERN Stack</p>
              <p>Islamic University Kushtia.</p>
             </div>
          </div>
        </div>
      </div>
  );
};

export default ThankyouPage;
