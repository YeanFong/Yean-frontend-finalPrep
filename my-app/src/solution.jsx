// src/solution.jsx
import React from "react";
import './solution.css';

const solutionData = [
  {
    quiz: "Quiz 6 (React useState & State Management)",
    questions: [
      {
        question:
          "Which of the following are valid ways to initialize useState? (Select all that apply)",
        correctAnswers: [
          "useState()",
          "useState(0)",
          'useState("hello")',
          "useState({ name: 'John', age: 30 })",
        ],
      },
      {
        question: "What does the useState hook return?",
        correctAnswers: [
          "An array with the current state and a function to update it",
        ],
      },
      {
        question:
          "You can call useState multiple times in a single component to manage different pieces of state.",
        correctAnswers: ["True"],
      },
      {
        question:
          "Which hook is used to add state to functional components in React?",
        correctAnswers: ["useState"],
      },
      {
        question:
          "What is the relationship between state and properties (props) in a component tree?",
        correctAnswers: [
          "When state changes, it can affect properties passed to child components",
        ],
      },
      {
        question:
          "What is the main advantage of using functional components with hooks over class components?",
        correctAnswers: ["Simpler syntax and easier state logic reuse"],
      },
      {
        question: "What is the primary purpose of state in React applications?",
        correctAnswers: [
          "To store data that has the ability to change and trigger re-renders",
        ],
      },
      {
        question:
          "Complete this code snippet to properly import and use useState:",
        correctAnswers: ["useState, setCount, useState, setCount"],
      },
      {
        question:
          "State variables created with useState always merge with the previous state like class component setState.",
        correctAnswers: ["False"],
      },
      {
        question: "What is the key difference between props and state?",
        correctAnswers: [
          "Props are passed from parent components, state is managed within the component",
        ],
      },
      {
        question:
          "Examine the following code structure. What is the main issue with this pattern, and what is it called?",
        correctAnswers: [
          "This demonstrates prop drilling - props are passed through components that don't use them directly",
        ],
      },
      {
        question:
          "Which of the following is the correct way to update state when the new state depends on the previous state?",
        correctAnswers: ["setState(prevCount => prevCount + 1)"],
      },
      {
        question:
          "In the following code, what will be logged to the console when the button is clicked?",
        correctAnswers: ["The previous count value (0 initially)"],
      },
      {
        question:
          "When you call a setState function from useState, what happens to the component?",
        correctAnswers: ["The component re-renders with the new state"],
      },
      {
        question:
          "Complete this code to properly handle form input with useState:",
        correctAnswers: ["username, setUsername"],
      },
      {
        question:
          "What is the consequence of directly modifying state variables without using the updater function returned by useState?",
        correctAnswers: [
          "State does not update correctly and React will not re-render the component",
        ],
      },
      {
        question:
          "What happens if you call useState in a conditional statement or loop?",
        correctAnswers: [
          "It violates the Rules of Hooks and can cause bugs",
        ],
      },
      {
        question:
          "In the following code, how many times will the component re-render when the button is clicked once?",
        correctAnswers: ["1 time (React batches updates)"],
      },
      {
        question:
          "Write a complete functional component called ToggleButton that:",
        correctAnswers: [
          "Uses useState to manage a boolean state called isOn (initially false)",
        ],
      },
      {
        question:
          "What is the correct way to update an object in state without mutating it?",
        correctAnswers: [
          "setUser({ ...user, age: 31 })",
        ],
      },
    ],
  },
  {
    quiz: "Quiz 7 (React Effects & Advanced Hooks)",
    questions: [
      {
        question: "When does the following effect run?",
        code: `useEffect(() => { fetchData(); }, [userId, postId]);`,
        correctAnswers: ["Only when userId or postId changes"],
      },
      {
        question: "What's the correct syntax for a cleanup function in useEffect?",
        code: `useEffect(() => { const timer = setInterval(() => {}, 1000); // cleanup here }, []);`,
        correctAnswers: ["return () => clearInterval(timer)"],
      },
      {
        question:
          "What is the main difference between useEffect and useLayoutEffect?",
        correctAnswers: ["useLayoutEffect runs synchronously after DOM mutations"],
      },
      {
        question: "What does useCallback do?",
        correctAnswers: ["Memoizes a callback function"],
      },
      {
        question:
          "What is the primary purpose of the useEffect Hook in React?",
        correctAnswers: ["To perform side effects after rendering"],
      },
      {
        question:
          "How do you make useEffect run only once (on mount)?",
        correctAnswers: ["useEffect(() => {}, [])"],
      },
      {
        question:
          "What does the dependency array in useEffect control?",
        correctAnswers: ["When the effect should re-run"],
      },
      {
        question:
          "What does the following code do?",
        code: `useEffect(() => { document.title = count; });`,
        correctAnswers: ["Updates the page title on every render"],
      },
      {
        question: "What is the syntax for useMemo?",
        correctAnswers: ["useMemo(() => value, [dependencies])"],
      },
      {
        question: "What is the purpose of useReducer?",
        correctAnswers: ["To manage complex state logic with actions"],
      },
      {
        question: "What is the purpose of the return function in useEffect?",
        correctAnswers: ["To cleanup side effects"],
      },
      {
        question:
          "What's the difference between useMemo and useCallback?",
        correctAnswers: [
          "useMemo returns a memoized value, useCallback returns a memoized function",
        ],
      },
      {
        question: "When does useEffect run by default?",
        correctAnswers: ["After every render"],
      },
      {
        question:
          "Which code is equivalent?\nCode A: useCallback(() => doSomething(), [a])\nCode B: useMemo(() => () => doSomething(), [a])",
        correctAnswers: ["They are equivalent"],
      },
      {
        question: "What is the correct signature of a reducer function?",
        correctAnswers: ["(state, action) => newState"],
      },
      {
        question: "What does useMemo do?",
        correctAnswers: ["Memoizes a computed value"],
      },
      {
        question:
          "Given this reducer:\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'INCREMENT':\n      return state + 1;\n    default:\n      return state;\n  }\n}\n\nHow do you dispatch an increment action?",
        correctAnswers: ["dispatch({ type: 'INCREMENT' })"],
      },
      {
        question:
          "What problem does this code have?",
        code: `useEffect(() => { setCount(count + 1); });`,
        correctAnswers: [
          "Both missing dependency array and creates an infinite loop.",
        ],
      },
      {
        question: "Why would you use useReducer instead of useState?",
        correctAnswers: [
          "When you have complex state logic with multiple sub-values or when next state depends on previous state",
        ],
      },
      {
        question:
          "When should you use useLayoutEffect instead of useEffect?",
        correctAnswers: [
          "When you need to measure DOM elements or prevent visual flicker",
        ],
      },
    ],
  },
  {
    quiz: "Quiz 8 (Data Fetching & State Management)",
    questions: [
      {
        question:
          "What term best describes data in a React component that has not been updated from its source?",
        correctAnswers: ["Stale"],
      },
      {
        question:
          "What does the second argument to useEffect represent?",
        correctAnswers: ["Dependency array"],
      },
      {
        question:
          "Which fetch call correctly retrieves data from an API in JavaScript?",
        correctAnswers: ["fetch(url).then(res => res.json())"],
      },
      {
        question:
          "When should you update state after fetching data?",
        correctAnswers: [
          "After successful data retrieval in useEffect",
        ],
      },
      {
        question: "What is the main role of data in React applications?",
        correctAnswers: ["Powering user interface components"],
      },
      {
        question: "How can you avoid stale data in React apps?",
        correctAnswers: [
          "Update from the source as needed",
        ],
      },
      {
        question:
          "What is the recommended React hook for fetching data in a function component?",
        correctAnswers: ["useEffect"],
      },
      {
        question: "Where should you update state after fetching data in a function component?",
        correctAnswers: ["Inside useEffect"],
      },
      {
        question:
          "How do you access API data in the React component after fetching?",
        correctAnswers: ["Update local state"],
      },
      {
        question:
          "Given: const [data, setData] = useState(null); What is the initial value of data?",
        correctAnswers: ["null"],
      },
      {
        question:
          "Which state update pattern is recommended when updating based on previous state?",
        correctAnswers: ["setState(prev => prev + newValue)"],
      },
      {
        question:
          "What is a best practice for handling loading state when fetching data?",
        correctAnswers: [
          "Using a boolean to render a loading indicator",
        ],
      },
      {
        question:
          "Which HTTP protocol is most commonly used to request data in React?",
        correctAnswers: ["HTTP"],
      },
      {
        question:
          "What should you do if a data fetch encounters an error?",
        correctAnswers: [
          "Set error state and display a message",
        ],
      },
      {
        question:
          "Where does most application data originate from in React apps?",
        correctAnswers: ["The internet/cloud"],
      },
      {
        question:
          "When working with async/await in useEffect, what is the recommended pattern?",
        correctAnswers: [
          "Create an async function inside useEffect and call it",
        ],
      },
      {
        question:
          "Which pattern is commonly used to separate data fetching logic from presentation?",
        correctAnswers: [
          "Custom hooks",
        ],
      },
      {
        question:
          "What lifecycle is similar to useEffect for class components?",
        correctAnswers: [
          "componentDidMount",
        ],
      },
      {
        question:
          "In the code snippet: fetch(url).then(res => res.json()) what does res.json() do?",
        correctAnswers: [
          "Converts response to JavaScript object",
        ],
      },
      {
        question:
          'What is "hydrating" an application in the context of data management?',
        correctAnswers: [
          "Loading and filling components with fresh data",
        ],
      },
    ],
  },
  {
    quiz: "Quiz 9 (React Suspense & Error Boundaries)",
    questions: [
      {
        question: "What is the primary purpose of React Suspense?",
        correctAnswers: [
          "Handling asynchronous operations and code splitting",
        ],
      },
      {
        question: "Can Suspense be used with regular (non-lazy) components?",
        correctAnswers: ["Yes, if they return a promise"],
      },
      {
        question: "What's the benefit of code splitting with React.lazy()?",
        correctAnswers: ["Smaller initial bundle size"],
      },
      {
        question: "Can you use multiple lazy-loaded components in one Suspense boundary?",
        correctAnswers: ["Yes"],
      },
      {
        question: "What happens if a Suspense boundary doesn't have a fallback prop?",
        correctAnswers: ["Throws an error"],
      },
      {
        question: "What is concurrent mode in React?",
        correctAnswers: [
          "A set of features for better handling of async rendering",
        ],
      },
      {
        question: "In this code, which component shows first?",
        code: `
<Suspense fallback={<Loading />}>
  {showProfile && <Profile />}
</Suspense>`,
        correctAnswers: ["Depends on showProfile value"],
      },
      {
        question: "What does this code do?",
        code: `
const MyComponent = React.lazy(() => import('./MyComponent'));`,
        correctAnswers: ["Creates a lazy-loaded component"],
      },
      {
        question: "Which React function enables lazy loading of components?",
        correctAnswers: ["React.lazy()"],
      },
      {
        question: "Which static method is used in Error Boundaries to update state after an error?",
        correctAnswers: ["getDerivedStateFromError"],
      },
      {
        question: "In this code, what will display while Profile loads?",
        code: `
<Suspense fallback={<Spinner />}>
  <Profile />
</Suspense>`,
        correctAnswers: ["Spinner component"],
      },
      {
        question: "Which component is used as a wrapper to enable Suspense functionality?",
        correctAnswers: ["<Suspense>"],
      },
      {
        question: "What does this code demonstrate?",
        code: `
const LazyComponent = lazy(() => import('./Heavy'));`,
        correctAnswers: ["Code splitting with dynamic import"],
      },
      {
        question: "Which lifecycle method is used in Error Boundaries?",
        correctAnswers: ["componentDidCatch"],
      },
      {
        question: "Which of the following is NOT a valid use case for Suspense?",
        correctAnswers: ["Form validation"],
      },
      {
        question: "Can you nest multiple Suspense boundaries?",
        correctAnswers: ["Yes"],
      },
      {
        question: "Can functional components be Error Boundaries?",
        correctAnswers: ["No, only class components"],
      },
      {
        question: "In this code, what's wrong?",
        code: `
<Suspense>
  <LazyComponent />
</Suspense>`,
        correctAnswers: ["Missing fallback prop"],
      },
      {
        question: "What prop does the Suspense component require to show while loading?",
        correctAnswers: ["fallback"],
      },
      {
        question: "What is an Error Boundary used for?",
        correctAnswers: ["Catching JavaScript errors in component tree"],
      },
      {
        question: "What happens when a suspended component throws a promise?",
        correctAnswers: ["Suspense catches it and shows fallback"],
      },
      {
        question: "What is the difference between Suspense and Error Boundary?",
        correctAnswers: ["Suspense handles loading, Error Boundary handles error"],
      },
    ],
  },
  {
    quiz: "Quiz 10 (React Router v6)",
    questions: [
      {
        question: "What is the purpose of the <Outlet /> component in React Router v6?",
        correctAnswers: [
          "It is used to render the matched child route's element within a parent route's element.",
        ],
      },
      {
        question: "What is the primary use case for the useRoutes hook?",
        correctAnswers: [
          "It’s the hook equivalent of <Routes>, allowing you to define your route configuration as a JavaScript object within a component.",
        ],
      },
      {
        question: "How do you create a catch-all route in React Router v6?",
        correctAnswers: ["path='*'"],
      },
      {
        question: "Which is the correct way to pass state during navigation?",
        correctAnswers: [
          "navigate('/path', {state: data })",
        ],
      },
      {
        question: "What information does the useLocation hook provide?",
        correctAnswers: [
          "An object representing the current URL including pathname, search, and hash properties.",
        ],
      },
      {
        question: "What happens if you call navigate('/users') while already on /users?",
        correctAnswers: [
          "Navigation occurs but component doesn’t re-render.",
        ],
      },
      {
        question: "What is the primary purpose of the <NavLink> component compared to <Link>?",
        correctAnswers: [
          "It knows whether or not it is 'active' and can be styled accordingly.",
        ],
      },
      {
        question: "Which hook is used for programmatic navigation?",
        correctAnswers: ["useNavigate"],
      },
      {
        question: "What is the main advantage of using <Link> over a standard <a> tag for internal navigation?",
        correctAnswers: [
          "<Link> prevents a full page reload, providing a single-page application (SPA) experience.",
        ],
      },
      {
        question: "Which is the correct way to define a route with a dynamic parameter?",
        correctAnswers: ["path='/users/:userId'"],
      },
      {
        question: "How do you navigate programmatically using useNavigate?",
        correctAnswers: ["navigate('/path')"],
      },
      {
        question: "How do you access URL parameters in React Router?",
        correctAnswers: ["useParams()"],
      },
      {
        question: "Which prop is used to specify the component to render for a route?",
        correctAnswers: ["element"],
      },
      {
        question: "Which hook is used to access dynamic parameters from the URL (e.g., :id in /users/:id)?",
        correctAnswers: ["useParams()"],
      },
      {
        question: "How do you define an index route in React Router v6?",
        correctAnswers: [
          "<Route index element={<Home />} />",
        ],
      },
      {
        question: "How do you implement a 'Not Found' page in React Router v6?",
        correctAnswers: [
          "Create a route with path='*' as the last route",
        ],
      },
      {
        question: "What prop is used to handle errors in a route?",
        correctAnswers: ["errorElement"],
      },
      {
        question: "What hook provides access to the current location object?",
        correctAnswers: ["useLocation()"],
      },
      {
        question: "What component is used to render nested routes in React?",
        correctAnswers: ["Outlet"],
      },
      {
        question: "How do you define a default or 'index' route for a nested route structure in React Router v6?",
        correctAnswers: [
          "By adding a route object with the index prop set to true inside the children array.",
        ],
      },
    ],
  },
];

function Solution() {
  return (
    <div className="quiz">
      {solutionData.map((quiz, quizIndex) => (
        <div key={quizIndex}>
          <h2>{quiz.quiz}</h2>
          {quiz.questions.map((q, qIndex) => (
            <div key={qIndex} className="question-block">
              <h3>{qIndex + 1}. {q.question}</h3>
              <p><strong>Correct Answer(s):</strong> {q.correctAnswers.join(", ")}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Solution;