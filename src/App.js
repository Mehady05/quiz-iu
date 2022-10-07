import '../src/App.css';
import { Routes, Route} from "react-router-dom";
import Home from './components/Home/Home';
import Steps from './components/Steps/Steps';
import { useState } from 'react';
import { QuizContext } from './components/Helpers/QuizContext';

function App() {
  const [score, setScore] = useState(0)
  return (
    <QuizContext.Provider value={{score, setScore}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Steps />} />
      </Routes>
    </QuizContext.Provider>
  );
}

export default App;
