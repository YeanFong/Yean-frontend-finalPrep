// src/App.jsx
import React, { useState } from "react";
import Quiz6 from "./quizzes/quiz6";
import Quiz7 from "./quizzes/quiz7";
import Quiz8 from "./quizzes/quiz8";
import Quiz9 from "./quizzes/quiz9";
import Quiz10 from "./quizzes/quiz10";

function App() {
  const [selectedQuiz, setSelectedQuiz] = useState("quiz6"); // Default to Quiz 6

  const handleQuizChange = (quizId) => {
    setSelectedQuiz(quizId);
  };

  return (
    <div className="App">
      <h1>React Quizzes App</h1>
      
      <div>
        <button onClick={() => handleQuizChange("quiz6")}>Quiz 6</button>
        <button onClick={() => handleQuizChange("quiz7")}>Quiz 7</button>
        <button onClick={() => handleQuizChange("quiz8")}>Quiz 8</button>
        <button onClick={() => handleQuizChange("quiz9")}>Quiz 9</button>
        <button onClick={() => handleQuizChange("quiz10")}>Quiz 10</button>
      </div>

      <div>
        {selectedQuiz === "quiz6" && <Quiz6 />}
        {selectedQuiz === "quiz7" && <Quiz7 />}
        {selectedQuiz === "quiz8" && <Quiz8 />}
        {selectedQuiz === "quiz9" && <Quiz9 />}
        {selectedQuiz === "quiz10" && <Quiz10 />}
      </div>
    </div>
  );
}

export default App;
