// src/App.js

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { quiz9 } from './quizzes/quiz9'; // Import quizzes
import { quiz10 } from './quizzes/quiz10';

function App() {
  return (
    <div className="App">
      <h1>Final Exam Prep Quizzes</h1>
      <nav>
        <ul>
          <li>
            <Link to="/quiz9">Quiz 9</Link>
          </li>
          <li>
            <Link to="/quiz10">Quiz 10</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/quiz9" element={<Quiz9 />} />
        <Route path="/quiz10" element={<Quiz10 />} />
      </Routes>
    </div>
  );
}

// Create Quiz Components to render for the specific routes
function Quiz9() {
  return (
    <div>
      <h2>Quiz 9: React Suspense & Error Boundaries</h2>
      {/* Render quiz questions and answers for quiz9 here */}
    </div>
  );
}

function Quiz10() {
  return (
    <div>
      <h2>Quiz 10: React Router v6</h2>
      {/* Render quiz questions and answers for quiz10 here */}
    </div>
  );
}

export default App;
