import React, { useContext, useState } from "react";
import { Questions } from "../Helpers/QuestionsBank";
import { QuizContext } from "../Helpers/QuizContext";
import ThankyouPage from "../ThankyouPage/ThankyouPage";
import './StepsInner.css'

const StepsInner = () => {
  const {score, setScore} = useContext(QuizContext)
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState('');
  const [addClass, setAddClass] = useState(false);
  console.log(addClass);

  

  const [number, setNumber] = useState(1)

  const nextQuestion = ()=>{
    if(Questions[currentQuestion].answer === optionChosen){
        setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
    setNumber(number + 1);
};

  const finisQuiz = ()=>{
    if(Questions[currentQuestion].answer === optionChosen){
        setScore(score + 1);
    }
    if(!addClass){
      const newClass = true;
      setAddClass(newClass)
    }
};



  return (
    <>
      <section className={`steps-inner pop-slide" id="step-1 ${addClass ? 'd-none' : 'd-block'}`}>
        <div className="wrapper">
          <div className="step-heading">
            <h2>English Reading & Writing test</h2>
            <p>Fill out this question and justify your level !</p>
          </div>
          <div className="step-bar">
            <span className="step-counter">{number} / {Questions.length}</span>
            <div className="step-bar-inner">
              <div className="step-bar-move step-move m25"></div>
            </div>
          </div>
          <form action="#" method="post">
            <div className="form-heading">
              <h1>{Questions[currentQuestion].question}</h1>
            </div>
            <div className="form-inner">
              <label className="form-input" for="work">
                <input type="radio" name="work" onClick={()=>{setOptionChosen('A')}}/>
                <button>{Questions[currentQuestion].optionA}</button>
              </label>
              <label className="form-input" for="work">
                <input type="radio" name="work" onClick={()=>{setOptionChosen('B')}}/>
                <button>{Questions[currentQuestion].optionB}</button>
              </label>
              <label className="form-input" for="work">
                <input type="radio" name="work" onClick={()=>{setOptionChosen('C')}}/>
                <button>{Questions[currentQuestion].optionC}</button>
              </label>
              <label className="form-input" for="work">
                <input type="radio" name="work" onClick={()=>{setOptionChosen('D')}}/>
                <button>{Questions[currentQuestion].optionD}</button>
              </label>
            </div>

            {/* <!-- next-prev-btn --> */}
            <div className="form-buttons">
            {currentQuestion === Questions.length - 1 ?(
            <button type="button" className="next" onClick={finisQuiz}>
            Submit & Show Your Result<i className="fa-solid fa-arrow-right"></i>
          </button>
            ):(
              <button type="button" className="next" onClick={nextQuestion}>
              Next Question<i className="fa-solid fa-arrow-right"></i>
            </button>
            )}
              
            </div>
          </form>
        </div>
      </section>

      <section class={`thankyou-page thankyou-circle steps-inner ${addClass ? 'd-block' : 'd-none'}`} id="thankyou">
        {
          <ThankyouPage score={score}></ThankyouPage>
        }
      </section>
      
    </>
  );
};

export default StepsInner;
