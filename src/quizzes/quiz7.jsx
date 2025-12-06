// src/quizzes/quiz7.js

export const quiz7 = {
  id: "quiz7",
  title: "Quiz 7 (React Effects & Advanced Hooks)",
  questions: [
    {
      id: 1,
      question: "When does the following effect run?",
      code: `
useEffect(() => {
  fetchData();
}, [userId, postId]);
      `.trim(),
      options: [
        "Only once",
        "Only when userId or postId changes",
        "On every render",
        "Never"
      ],
      correctIndex: 1,
      explanation:
        "With a dependency array [userId, postId], the effect runs on mount and whenever userId or postId changes."
    },
    {
      id: 2,
      question: "What's the correct syntax for a cleanup function in useEffect?",
      code: `
useEffect(() => {
  const timer = setInterval(() => {}, 1000);
  // cleanup here
}, []);
      `.trim(),
      options: [
        "return () => clearInterval(timer)",
        "cleanup() => clearInterval(timer)",
        "return clearInterval(timer)",
        "useCleanup(() => clearInterval(timer))"
      ],
      correctIndex: 0,
      explanation:
        "useEffect cleanup is done by returning a function: return () => clearInterval(timer)."
    },
    {
      id: 3,
      question:
        "What is the main difference between useEffect and useLayoutEffect?",
      code: "",
      options: [
        "They are identical",
        "useLayoutEffect runs synchronously after DOM mutations",
        "useLayoutEffect doesn't support cleanup",
        "useLayoutEffect runs asynchronously"
      ],
      correctIndex: 1,
      explanation:
        "useLayoutEffect fires synchronously after DOM updates, while useEffect runs asynchronously after painting."
    },
    {
      id: 4,
      question: "What does useCallback do?",
      code: "",
      options: [
        "Creates a callback reference",
        "Memoizes a callback function",
        "Calls a function automatically",
        "Prevents function execution"
      ],
      correctIndex: 1,
      explanation:
        "useCallback memoizes a function so its identity is stable between renders unless dependencies change."
    },
    {
      id: 5,
      question:
        "What is the primary purpose of the useEffect Hook in React?",
      code: "",
      options: [
        "To memoize values",
        "To perform side effects after rendering",
        "To manage state",
        "To create refs"
      ],
      correctIndex: 1,
      explanation:
        "useEffect is used for side effects such as data fetching, subscriptions, and DOM updates."
    },
    {
      id: 6,
      question:
        "How do you make useEffect run only once (on mount)?",
      code: "",
      options: [
        "useEffect(() => {})",
        "useEffect(() => {}, count)",
        "useEffect(() => {}, null)",
        "useEffect(() => {}, [])"
      ],
      correctIndex: 3,
      explanation:
        "An empty dependency array means the effect runs only once after the initial render."
    },
    {
      id: 7,
      question:
        "What does the dependency array in useEffect control?",
      code: "",
      options: [
        "Which state variables to create",
        "Which props to receive",
        "The order of effects",
        "When the effect should re-run"
      ],
      correctIndex: 3,
      explanation:
        "React re-runs the effect whenever one of the dependencies in the array changes."
    },
    {
      id: 8,
      question: "What does the following code do?",
      code: `
useEffect(() => {
  document.title = count;
});
      `.trim(),
      options: [
        "Updates the page title only once",
        "Causes an error",
        "Creates an infinite loop",
        "Updates the page title on every render"
      ],
      correctIndex: 3,
      explanation:
        "Without a dependency array, the effect runs after every render and updates the title each time."
    },
    {
      id: 9,
      question: "What is the syntax for useMemo?",
      code: "",
      options: [
        "useMemo([dependencies], () => value)",
        "useMemo(() => value, [dependencies])",
        "useMemo(value, [dependencies])",
        "useMemo(value)"
      ],
      correctIndex: 1,
      explanation:
        "useMemo takes a function that returns a value and a dependency array: useMemo(() => value, [deps])."
    },
    {
      id: 10,
      question: "What is the purpose of useReducer?",
      code: "",
      options: [
        "To manage complex state logic with actions",
        "To reduce render count",
        "To minimize code",
        "To reduce component size"
      ],
      correctIndex: 0,
      explanation:
        "useReducer is useful for complex state transitions driven by actions."
    },
    {
      id: 11,
      question:
        "What is the purpose of the return function in useEffect?",
      code: "",
      options: [
        "To prevent re-renders",
        "To cleanup side effects",
        "To cancel the effect",
        "To return data to the component"
      ],
      correctIndex: 1,
      explanation:
        "The function returned from useEffect is the cleanup function for that effect."
    },
    {
      id: 12,
      question:
        "What's the difference between useMemo and useCallback?",
      code: "",
      options: [
        "useCallback is faster",
        "useMemo only works with numbers",
        "No difference",
        "useMemo returns a memoized value, useCallback returns a memoized function"
      ],
      correctIndex: 3,
      explanation:
        "useMemo is for memoizing values; useCallback is specifically for memoizing functions."
    },
    {
      id: 13,
      question: "When does useEffect run by default?",
      code: "",
      options: [
        "Only when state changes",
        "Only on the first render",
        "After every render",
        "Before the component renders"
      ],
      correctIndex: 2,
      explanation:
        "Without a dependency array, useEffect runs after every completed render."
    },
    {
      id: 14,
      question:
        "Which code is equivalent?\nCode A: useCallback(() => doSomething(), [a])\nCode B: useMemo(() => () => doSomething(), [a])",
      code: "",
      options: [
        "Code A is wrong",
        "Code B is wrong",
        "They are not equivalent",
        "They are equivalent"
      ],
      correctIndex: 3,
      explanation:
        "useCallback(fn, deps) is essentially useMemo(() => fn, deps); both produce a memoized function."
    },
    {
      id: 15,
      question:
        "What is the correct signature of a reducer function?",
      code: "",
      options: [
        "(action) => newState",
        "(state, action) => newState",
        "(newState, action) => state",
        "(state) => newState"
      ],
      correctIndex: 1,
      explanation:
        "A reducer takes the current state and an action, and returns the new state."
    },
    {
      id: 16,
      question: "What does useMemo do?",
      code: "",
      options: [
        "Memoizes a callback function",
        "Memoizes a computed value",
        "Memoizes a component",
        "Prevents all re-renders"
      ],
      correctIndex: 1,
      explanation:
        "useMemo memoizes the result of a computation so it’s only recomputed when dependencies change."
    },
    {
      id: 17,
      question:
        "Given this reducer:\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'INCREMENT':\n      return state + 1;\n    default:\n      return state;\n  }\n}\n\nHow do you dispatch an increment action?",
      code: "",
      options: [
        "dispatch('INCREMENT')",
        "increment()",
        "dispatch({ type: 'INCREMENT' })",
        "reducer({ type: 'INCREMENT' })"
      ],
      correctIndex: 2,
      explanation:
        "Actions are plain objects; you dispatch({ type: 'INCREMENT' })."
    },
    {
      id: 18,
      question: "What problem does this code have?",
      code: `
useEffect(() => {
  setCount(count + 1);
});
      `.trim(),
      options: [
        "Both missing dependency array and creates an infinite loop.",
        "Creates an infinite loop",
        "Missing dependency array",
        "Syntax error"
      ],
      correctIndex: 0,
      explanation:
        "Because there is no dependency array, the effect runs after every render and also updates state, causing an infinite loop; it’s also missing an explicit dependency list."
    },
    {
      id: 19,
      question:
        "Why would you use useReducer instead of useState?",
      code: "",
      options: [
        "useReducer is always faster",
        "useState is deprecated",
        "useReducer uses less memory",
        "When you have complex state logic with multiple sub-values or when next state depends on previous state"
      ],
      correctIndex: 3,
      explanation:
        "useReducer shines when state logic is complex or derived from previous state via actions."
    },
    {
      id: 20,
      question:
        "When should you use useLayoutEffect instead of useEffect?",
      code: "",
      options: [
        "For event listeners",
        "For data fetching",
        "For all side effects",
        "When you need to measure DOM elements or prevent visual flicker"
      ],
      correctIndex: 3,
      explanation:
        "useLayoutEffect is used when you need to read layout or synchronously re-measure DOM to avoid flicker."
    }
  ]
};
