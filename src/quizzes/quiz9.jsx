// src/quizzes/quiz9.js

export const quiz9 = {
  id: "quiz9",
  title: "Quiz 9 (React Suspense & Error Boundaries)",
  questions: [
    {
      id: 1,
      question:
        "What is the primary purpose of React Suspense?",
      code: "",
      options: [
        "Routing",
        "Handling asynchronous operations and code splitting",
        "Styling components",
        "Managing state"
      ],
      correctIndex: 1,
      explanation:
        "Suspense is designed to handle asynchronous operations, allowing components to 'wait' for something before rendering, particularly useful for code splitting and data fetching."
    },
    {
      id: 2,
      question:
        "Can Suspense be used with regular (non-lazy) components?",
      code: "",
      options: [
        "No, never",
        "Yes, always",
        "Yes, if they return a promise",
        "Only in dev mode"
      ],
      correctIndex: 2,
      explanation:
        "Suspense can work with any component that 'suspends' by throwing a promise, not just lazy-loaded components."
    },
    {
      id: 3,
      question:
        "What's the benefit of code splitting with React.lazy()?",
      code: "",
      options: [
        "Easier debugging",
        "Faster development",
        "Better styling",
        "Smaller initial bundle size"
      ],
      correctIndex: 3,
      explanation:
        "Code splitting with React.lazy reduces the initial bundle size by loading components only when needed."
    },
    {
      id: 4,
      question:
        "Can you use multiple lazy-loaded components in one Suspense boundary?",
      code: "",
      options: [
        "Only if they're siblings",
        "Yes",
        "Only two",
        "No"
      ],
      correctIndex: 1,
      explanation:
        "A single Suspense boundary can wrap multiple lazy-loaded components, showing one fallback for all."
    },
    {
      id: 5,
      question:
        "What happens if a Suspense boundary doesn't have a fallback prop?",
      code: "",
      options: [
        "Uses default loader",
        "Component renders normally",
        "Throws an error",
        "Shows blank screen"
      ],
      correctIndex: 2,
      explanation:
        "If Suspense doesn't have a fallback, React will throw an error."
    },
    {
      id: 6,
      question: "What is concurrent mode in React?",
      code: "",
      options: [
        "Multi-threading in React",
        "Server-side rendering",
        "A set of features for better handling of async rendering",
        "Running multiple apps"
      ],
      correctIndex: 2,
      explanation:
        "Concurrent mode is a set of experimental features that help React apps stay responsive by rendering component trees without blocking the main thread."
    },
    {
      id: 7,
      question:
        "In this code, which component shows first?",
      code: `
<Suspense fallback={<Loading />}>
  {showProfile && <Profile />}
</Suspense>`,
      options: [
        "Profile",
        "Loading",
        "Both at once",
        "Depends on showProfile value"
      ],
      correctIndex: 3,
      explanation:
        "If showProfile is true and Profile suspends, Loading shows; if showProfile is false, nothing inside Suspense renders."
    },
    {
      id: 8,
      question:
        "What does this code do?",
      code: `
const MyComponent = React.lazy(() => import('./MyComponent'));
      `,
      options: [
        "Eager loading",
        "Component composition",
        "Static import",
        "Code splitting with dynamic import"
      ],
      correctIndex: 3,
      explanation:
        "This demonstrates code splitting by dynamically importing a component only when it's needed, reducing initial bundle size."
    },
    {
      id: 9,
      question:
        "Which React function enables lazy loading of components?",
      code: "",
      options: [
        "React.async()",
        "React.load()",
        "React.lazy()",
        "React.import()"
      ],
      correctIndex: 2,
      explanation:
        "React.lazy() enables dynamic import of components, splitting code into smaller chunks that load on demand."
    },
    {
      id: 10,
      question:
        "Which static method is used in Error Boundaries to update state after an error?",
      code: "",
      options: [
        "getErrorState",
        "getDerivedStateFromProps",
        "updateErrorState",
        "getDerivedStateFromError"
      ],
      correctIndex: 3,
      explanation:
        "static getDerivedStateFromError() is used to update state so the next render shows fallback UI."
    },
    {
      id: 11,
      question:
        "In this code, what will display while Profile loads?",
      code: `
<Suspense fallback={<Spinner />}>
  <Profile />
</Suspense>`,
      options: [
        "Error message",
        "Profile component",
        "Spinner component",
        "Nothing"
      ],
      correctIndex: 2,
      explanation:
        "The Spinner component will display as the fallback UI while Profile is loading."
    },
    {
      id: 12,
      question:
        "Which component is used as a wrapper to enable Suspense functionality?",
      code: "",
      options: [
        "<Wait>",
        "<Loader>",
        "<Suspense>",
        "<Async>"
      ],
      correctIndex: 2,
      explanation:
        "The <Suspense> component wraps components that might suspend, providing a fallback UI while waiting."
    },
    {
      id: 13,
      question:
        "What does this code demonstrate?",
      code: `
const LazyComponent = lazy(() => import('./Heavy'));
      `,
      options: [
        "Static import",
        "Component composition",
        "Eager loading",
        "Code splitting with dynamic import"
      ],
      correctIndex: 3,
      explanation:
        "This demonstrates code splitting by dynamically importing a component only when it's needed, reducing initial bundle size."
    },
    {
      id: 14,
      question:
        "Which lifecycle method is used in Error Boundaries?",
      code: "",
      options: [
        "shouldComponentUpdate",
        "componentDidUpdate",
        "componentWillMount",
        "componentDidCatch"
      ],
      correctIndex: 3,
      explanation:
        "componentDidCatch() is the lifecycle method used to catch errors in descendant components."
    },
    {
      id: 15,
      question:
        "Which of the following is NOT a valid use case for Suspense?",
      code: "",
      options: [
        "Code splitting",
        "Data fetching",
        "Lazy loading components",
        "Form validation"
      ],
      correctIndex: 3,
      explanation:
        "Suspense is designed for handling asynchronous operations like code splitting, lazy loading, and data fetching, not synchronous operations like form validation."
    },
    {
      id: 16,
      question:
        "Can you nest multiple Suspense boundaries?",
      code: "",
      options: [
        "No",
        "Only in production",
        "Yes",
        "Only two levels deep"
      ],
      correctIndex: 2,
      explanation:
        "Multiple Suspense boundaries can be nested to provide granular loading states for different parts of the component tree."
    },
    {
      id: 17,
      question:
        "Can functional components be Error Boundaries?",
      code: "",
      options: [
        "Yes, with try-catch",
        "Yes, with Suspense",
        "No, only class components",
        "Yes, with hooks"
      ],
      correctIndex: 2,
      explanation:
        "Currently, only class components can be Error Boundaries as there is no hook equivalent for componentDidCatch."
    },
    {
      id: 18,
      question:
        "In this code, what's wrong?",
      code: `
<Suspense>
  <LazyComponent />
</Suspense>
      `,
      options: [
        "Wrong syntax",
        "Nothing",
        "Missing fallback prop",
        "Missing import"
      ],
      correctIndex: 2,
      explanation:
        "The Suspense component requires a fallback prop to specify what to show during loading."
    },
    {
      id: 19,
      question:
        "What prop does the Suspense component require to show while loading?",
      code: "",
      options: [
        "placeholder",
        "loading",
        "spinner",
        "fallback"
      ],
      correctIndex: 3,
      explanation:
        "The fallback prop specifies what to render while the suspended component is loading."
    },
    {
      id: 20,
      question:
        "What is an Error Boundary used for?",
      code: "",
      options: [
        "Preventing errors",
        "Validating props",
        "Catching JavaScript errors in component tree",
        "Testing components"
      ],
      correctIndex: 2,
      explanation:
        "Error Boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display fallback UI."
    }
  ]
};
