import React from "react";
import { Link } from "react-router-dom";
import PlayButton from "../PlayButton/PlayButton";
import "./Home.css";

const Home = () => {
  return (
    <div className="full-home">
      <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="main-box">
                    <main className="quiz-home text-center">
                        <h2>Welcome to the Quiz Page!</h2>
                        <p>You can do this, I believe in you.</p>
                    </main>
                    <nav className="quiz-link text-center">
                        <Link to="/quiz" className={{marginTop:'20px'}}><PlayButton></PlayButton></Link>
                    </nav>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
