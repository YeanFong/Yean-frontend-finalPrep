// src/quizzes.js

export const QUIZZES = [
  {
    id: "quiz6",
    title: "Quiz 6 (React useState & State Management)",
    questions: [
      {
        id: 1,
        question:
          "Which of the following are valid ways to initialize useState? (Select all that apply)",
        code: "",
        options: [
          "useState()",
          "useState(0)",
          'useState("hello")',
          "useState({ name: 'John', age: 30 })",
        ],
        // multi-select answer
        correctIndex: [1, 2, 3],
        explanation:
          "useState can be initialized with any value (number, string, object, etc.). Calling useState() with no argument is allowed but uncommon."
      },
      {
        id: 2,
        question: "What does the useState hook return?",
        code: "",
        options: [
          "An object with state properties",
          "An array with the current state and a function to update it",
          "A single state value",
          "A function to update state"
        ],
        correctIndex: 1,
        explanation:
          "useState returns a two-element array: [state, setState]."
      },
      {
        id: 3,
        question:
          "You can call useState multiple times in a single component to manage different pieces of state.",
        code: "",
        options: ["True", "False"],
        correctIndex: 0,
        explanation:
          "You can call useState as many times as you want in a component (as long as you follow the Rules of Hooks)."
      },
      {
        id: 4,
        question:
          "Which hook is used to add state to functional components in React?",
        code: "",
        options: ["useReducer", "useEffect", "useState", "useContext"],
        correctIndex: 2,
        explanation: "useState is the basic hook for adding state to a component."
      },
      {
        id: 5,
        question:
          "What is the relationship between state and properties (props) in a component tree?",
        code: "",
        options: [
          "When state changes, it can affect properties passed to child components",
          "They are completely independent",
          "State is only used in parent components",
          "Properties always override state"
        ],
        correctIndex: 0,
        explanation:
          "When a parent component’s state changes, new props are passed down to its children."
      },
      {
        id: 6,
        question:
          "What is the main advantage of using functional components with hooks over class components?",
        code: "",
        options: [
          "Better performance",
          "Better browser compatibility",
          "Simpler syntax and easier state logic reuse",
          "Smaller bundle size"
        ],
        correctIndex: 2,
        explanation:
          "Hooks make it easier to reuse and organize stateful logic with simpler syntax."
      },
      {
        id: 7,
        question: "What is the primary purpose of state in React applications?",
        code: "",
        options: [
          "To store static data that never changes",
          "To manage CSS styling information",
          "To handle component imports and exports",
          "To store data that has the ability to change and trigger re-renders"
        ],
        correctIndex: 3,
        explanation:
          "State is for dynamic data that can change over time and cause React to re-render."
      },
      {
        id: 8,
        question:
          "Complete this code snippet to properly import and use useState:",
        code: `
import React, { ______ } from 'react';

function Counter() {
  const [count, ______] = ______(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => ______(count + 1)}>+</button>
    </div>
  );
}
        `.trim(),
        options: [
          "usestate, setCount, usestate, setCount",
          "useState, setCount, useState, setCount",
          "useState, changeCount, useState, changeCount",
          "useState, updateCount, useState, updateCount"
        ],
        correctIndex: 1,
        explanation:
          "You import useState, then call const [count, setCount] = useState(0) and use setCount to update."
      },
      {
        id: 9,
        question:
          "State variables created with useState always merge with the previous state like class component setState.",
        code: "",
        options: ["True", "False"],
        correctIndex: 1,
        explanation:
          "useState replaces the state value; it does not merge objects automatically like this.setState in classes."
      },
      {
        id: 10,
        question: "What is the key difference between props and state?",
        code: "",
        options: [
          "Props are passed from parent components, state is managed within the component",
          "There is no difference between props and state",
          "Props are for styling, state is for data",
          "Props can change, state cannot"
        ],
        correctIndex: 0,
        explanation:
          "Props come from the parent; state is internal to the component (or managed by hooks)."
      },
      {
        id: 11,
        question:
          "Examine the following code structure. What is the main issue with this pattern, and what is it called?",
        code: `
function App() {
  const [user, setUser] = useState({ name: 'Alice', role: 'admin' });
  return <Dashboard user={user} />;
}

function Dashboard({ user }) {
  return (
    <div>
      <Header user={user} />
      <MainContent user={user} />
    </div>
  );
}

function Header({ user }) {
  return (
    <div>
      <Navigation user={user} />
      <SearchBar />
    </div>
  );
}

function Navigation({ user }) {
  return <nav>Welcome, {user.name}!</nav>;
}
        `.trim(),
        options: [
          "This demonstrates prop drilling - props are passed through components that don't use them directly",
          "There are too many function components",
          "The user state should be in a class component instead",
          "The components are too deeply nested"
        ],
        correctIndex: 0,
        explanation:
          "user is passed through several components just so a deeply nested child can use it; this is prop drilling."
      },
      {
        id: 12,
        question:
          "Which of the following is the correct way to update state when the new state depends on the previous state?",
        code: "",
        options: [
          "setState(prevCount => prevCount + 1)",
          "setState(count + 1)",
          "setState({ count: count + 1 })",
          "setState(this.state.count + 1)"
        ],
        correctIndex: 0,
        explanation:
          "You should pass a function to setState/useState that receives the previous value."
      },
      {
        id: 13,
        question:
          "In the following code, what will be logged to the console when the button is clicked?",
        code: `
function Example() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };

  return <button onClick={handleClick}>Click me</button>;
}
        `.trim(),
        options: [
          "An error will occur",
          "undefined",
          "The new count value (1 initially)",
          "The previous count value (0 initially)"
        ],
        correctIndex: 3,
        explanation:
          "setCount is asynchronous; console.log uses the old value of count."
      },
      {
        id: 14,
        question:
          "When you call a setState function from useState, what happens to the component?",
        code: "",
        options: [
          "The component unmounts and remounts",
          "The component re-renders with the new state",
          "Only the state updates without re-rendering",
          "Nothing happens"
        ],
        correctIndex: 1,
        explanation:
          "A state update schedules a re-render of that component."
      },
      {
        id: 15,
        question:
          "Complete this code to properly handle form input with useState:",
        code: `
function LoginForm() {
  const [username, setUsername] = useState('');

  return (
    <input
      type="text"
      value={______}
      onChange={(e) => ______(e.target.value)}
    />
  );
}
        `.trim(),
        options: [
          "this.state.username, this.setState",
          "state.username, setState",
          "setUsername, username",
          "username, setUsername"
        ],
        correctIndex: 3,
        explanation:
          "The input should display username and update it using setUsername."
      },
      {
        id: 16,
        question:
          "What is the consequence of directly modifying state variables without using the updater function returned by useState?",
        code: "",
        options: [
          "State does not update correctly and React will not re-render the component",
          "The app will crash immediately",
          "State updates asynchronously but correctly",
          "State updates correctly and triggers re-renders"
        ],
        correctIndex: 0,
        explanation:
          "React only tracks state changes made via the setter function."
      },
      {
        id: 17,
        question:
          "What happens if you call useState in a conditional statement or loop?",
        code: "",
        options: [
          "Nothing special happens",
          "It violates the Rules of Hooks and can cause bugs",
          "React automatically handles it correctly",
          "The state updates slower"
        ],
        correctIndex: 1,
        explanation:
          "Hooks must be called unconditionally at the top level of the component."
      },
      {
        id: 18,
        question:
          "In the following code, how many times will the component re-render when the button is clicked once?",
        code: `
function MultiUpdate() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const handleClick = () => {
    setCount(1);
    setName('Updated');
  };

  return <button onClick={handleClick}>Update</button>;
}
        `.trim(),
        options: [
          "2 times (one for each state update)",
          "1 time (React batches updates)",
          "3 times",
          "0 times"
        ],
        correctIndex: 1,
        explanation:
          "In a single event handler, React batches multiple state updates into one re-render."
      },
      {
        id: 19,
        question:
          "Write a complete functional component called ToggleButton that:",
        code: "",
        options: [
          "Uses useState to manage a boolean state called isOn (initially false)",
          "Use useEffect to manage a boolean state",
          "Has a button that toggles the state when clicked",
          'Displays "ON" when true, "OFF" when false'
        ],
        correctIndex: 0, // matches the option selected in your screenshot
        explanation:
          "A ToggleButton component would typically use useState to track a boolean isOn value."
      },
      {
        id: 20,
        question:
          "What is the correct way to update an object in state without mutating it?",
        code: `
const [user, setUser] = useState({ name: 'John', age: 30 });
        `.trim(),
        options: [
          "setUser(user.age = 31)",
          "user.age = 31; setUser(user)",
          "setUser({ ...user, age: 31 })",
          "setUser(user.age++)"
        ],
        correctIndex: 2,
        explanation:
          "You should create a new object using the spread operator and update the specific property: setUser({ ...user, age: 31 })."
      }
    ]
  }
];
