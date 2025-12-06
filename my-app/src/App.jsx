import React, { useState } from "react";
import Quiz6 from "./quizzes/quiz6";
import Quiz7 from "./quizzes/quiz7";
import Quiz8 from "./quizzes/quiz8";
import Quiz9 from "./quizzes/quiz9";
import Quiz10 from "./quizzes/quiz10";
import Solution from './solution';

function App() {
  const [selectedQuiz, setSelectedQuiz] = useState("quiz6"); // Default to Quiz 6
  const [showSolutions, setShowSolutions] = useState(false); // Track whether to show solutions or not

  const handleQuizChange = (quizId) => {
    setSelectedQuiz(quizId);
  };

  const handleSolutionToggle = () => {
    setShowSolutions((prevState) => !prevState);
  };

  return (
    <div className="App">
      <h1>React Quizzes App</h1>
      
      {/* Quiz Selection Buttons */}
      <div>
        <button onClick={() => handleQuizChange("quiz6")}>Quiz 6</button>
        <button onClick={() => handleQuizChange("quiz7")}>Quiz 7</button>
        <button onClick={() => handleQuizChange("quiz8")}>Quiz 8</button>
        <button onClick={() => handleQuizChange("quiz9")}>Quiz 9</button>
        <button onClick={() => handleQuizChange("quiz10")}>Quiz 10</button>
      </div>

      {/* Toggle Button for Solutions */}
      <div style={{ marginTop: "10px" }}>
        <button onClick={handleSolutionToggle}>
          {showSolutions ? "Hide Solutions" : "Show Solutions"}
        </button>
      </div>

      {/* Render Quiz or Solutions based on the state */}
      <div>
        {showSolutions ? (
          <Solution /> // Show solutions when toggled
        ) : (
          <>
            {selectedQuiz === "quiz6" && <Quiz6 />}
            {selectedQuiz === "quiz7" && <Quiz7 />}
            {selectedQuiz === "quiz8" && <Quiz8 />}
            {selectedQuiz === "quiz9" && <Quiz9 />}
            {selectedQuiz === "quiz10" && <Quiz10 />}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
