// src/quizzes/quiz8.js

export const quiz8 = {
  id: "quiz8",
  title: "Quiz 8 (Data Fetching & State Management)",
  questions: [
    {
      id: 1,
      question:
        "What term best describes data in a React component that has not been updated from its source?",
      code: "",
      options: ["Stale", "Fresh", "Lazy", "Hot"],
      correctIndex: 0,
      explanation:
        'Data that is out of sync with its source is called "stale" data.'
    },
    {
      id: 2,
      question: "What does the second argument to useEffect represent?",
      code: "",
      options: [
        "Initial state",
        "Callback function",
        "Dependency array",
        "Debug flag"
      ],
      correctIndex: 2,
      explanation:
        "The second argument is the dependency array, which controls when the effect runs."
    },
    {
      id: 3,
      question:
        "Which fetch call correctly retrieves data from an API in JavaScript?",
      code: "",
      options: [
        "request(url).getJSON()",
        "fetch(url).then(() => {})",
        "fetch(url).then(data => data)",
        "fetch(url).then(res => res.json())"
      ],
      correctIndex: 3,
      explanation:
        "You must parse the response with res.json() to turn it into usable JavaScript data."
    },
    {
      id: 4,
      question:
        "When should you update state after fetching data?",
      code: "",
      options: [
        "After successful data retrieval in useEffect",
        "In the component constructor",
        "In the render method",
        "During the fetch call"
      ],
      correctIndex: 0,
      explanation:
        "Update state after the data has been successfully fetched and processed, typically inside useEffect."
    },
    {
      id: 5,
      question:
        "What is the main role of data in React applications?",
      code: "",
      options: [
        "Powering user interface components",
        "Routing",
        "Managing assets",
        "Styling components"
      ],
      correctIndex: 0,
      explanation:
        "Data flows through components and powers the UI by providing values to render."
    },
    {
      id: 6,
      question:
        "How can you avoid stale data in React apps?",
      code: "",
      options: [
        "Rely on initial props",
        "Always fetch new data",
        "Use local storage only",
        "Update from the source as needed"
      ],
      correctIndex: 3,
      explanation:
        "Regularly syncing local state with the source keeps data fresh and avoids staleness."
    },
    {
      id: 7,
      question:
        "What is the recommended React hook for fetching data in a function component?",
      code: "",
      options: ["useRef", "useContext", "useEffect", "useState"],
      correctIndex: 2,
      explanation:
        "useEffect is used to trigger side effects like data fetching after a render."
    },
    {
      id: 8,
      question:
        "Where should you update state after fetching data in a function component?",
      code: "",
      options: [
        "Outside the component",
        "Inside useEffect",
        "In the constructor",
        "Directly in the render"
      ],
      correctIndex: 1,
      explanation:
        "State updates after data fetching should happen inside useEffect."
    },
    {
      id: 9,
      question:
        "How do you access API data in the React component after fetching?",
      code: "",
      options: [
        "Pass as props",
        "Store in global",
        "Return from render",
        "Update local state"
      ],
      correctIndex: 3,
      explanation:
        "Fetched data is usually stored in local state so the component can render it."
    },
    {
      id: 10,
      question:
        "Given: const [data, setData] = useState(null); What is the initial value of data?",
      code: "",
      options: ["Empty array", "Empty object", "undefined", "null"],
      correctIndex: 3,
      explanation:
        "The initial state argument is null, so data starts as null."
    },
    {
      id: 11,
      question:
        "Which state update pattern is recommended when updating based on previous state?",
      code: "",
      options: [
        "setState(newValue)",
        "setState(prev => prev + newValue)",
        "setState(() => {})",
        "state.value = newValue"
      ],
      correctIndex: 1,
      explanation:
        "When next state depends on previous state, pass a function: setState(prev => ...)."
    },
    {
      id: 12,
      question:
        "What is a best practice for handling loading state when fetching data?",
      code: "",
      options: [
        "Logging the result",
        "Showing an alert",
        "Using a boolean to render a loading indicator",
        "Skipping loading feedback"
      ],
      correctIndex: 2,
      explanation:
        "A boolean loading flag that conditionally shows a spinner/indicator improves UX."
    },
    {
      id: 13,
      question:
        "Which HTTP protocol is most commonly used to request data in React?",
      code: "",
      options: ["TCP", "HTTP", "SMTP", "FTP"],
      correctIndex: 1,
      explanation:
        "HTTP is the standard protocol for web API requests from React."
    },
    {
      id: 14,
      question:
        "What should you do if a data fetch encounters an error?",
      code: "",
      options: [
        "Restart the app",
        "Set error state and display a message",
        "Throw the error",
        "Ignore it"
      ],
      correctIndex: 1,
      explanation:
        "Store the error in state and show a helpful message so users know what happened."
    },
    {
      id: 15,
      question:
        "Where does most application data originate from in React apps?",
      code: "",
      options: [
        "Local storage",
        "The Redux store",
        "The internet/cloud",
        "The CSS file"
      ],
      correctIndex: 2,
      explanation:
        "Most data is fetched from APIs, databases, or services in the cloud."
    },
    {
      id: 16,
      question:
        "When working with async/await in useEffect, what is the recommended pattern?",
      code: "",
      options: [
        "Avoid async operations in useEffect",
        "Use async directly on useEffect callback",
        "Create an async function inside useEffect and call it",
        "Use promises instead of async/await"
      ],
      correctIndex: 2,
      explanation:
        "Because the effect callback itself can't be async, define an async function inside and invoke it."
    },
    {
      id: 17,
      question:
        "Which pattern is commonly used to separate data fetching logic from presentation?",
      code: "",
      options: [
        "Singleton pattern",
        "Factory pattern",
        "Custom hooks",
        "Observer pattern"
      ],
      correctIndex: 2,
      explanation:
        "Custom hooks encapsulate data-fetching logic and let you reuse it across components."
    },
    {
      id: 18,
      question:
        "What lifecycle is similar to useEffect for class components?",
      code: "",
      options: [
        "getDerivedStateFromProps",
        "shouldComponentUpdate",
        "componentDidMount",
        "componentWillUnmount"
      ],
      correctIndex: 2,
      explanation:
        "componentDidMount is where data fetching typically occurs in class components, similar to useEffect on mount."
    },
    {
      id: 19,
      question:
        "In the code snippet: fetch(url).then(res => res.json()) what does res.json() do?",
      code: "",
      options: [
        "Validates JSON structure",
        "Sends JSON to server",
        "Converts response to JavaScript object",
        "Creates a JSON file"
      ],
      correctIndex: 2,
      explanation:
        "res.json() parses the response body and returns a promise that resolves to a JavaScript object."
    },
    {
      id: 20,
      question:
        'What is "hydrating" an application in the context of data management?',
      code: "",
      options: [
        "Compressing data",
        "Encrypting data",
        "Removing unused data",
        "Loading and filling components with fresh data"
      ],
      correctIndex: 3,
      explanation:
        "Hydrating means filling application components with fresh data from external sources."
    }
  ]
};
