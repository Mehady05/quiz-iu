import { Link } from "react-router-dom";
import "./Home.css";
import { useContext } from "react";
import { QuizContext } from "../Helpers/QuizContext";

const Home = () => {
  const {setTimeOn } = useContext(QuizContext);
  return (
    <div className="full-home">
      <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="main-box">
                    <main className="quiz-home text-center">
                        <h2>Welcome to the Quiz Page!</h2>
                        <p>You can do this. I believe you.</p>
                    </main>
                    <nav className="quiz-link text-center">
                        <Link to="/quiz" className={{marginTop:'20px'}}><button onClick={(e)=>{
                          setTimeOn(true)
                        }}>Start</button></Link>
                    </nav>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
