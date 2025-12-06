// src/quizzes/quiz10.js

export const quiz10 = {
  id: "quiz10",
  title: "Quiz 10 (React Router v6)",
  questions: [
    {
      id: 1,
      question: "What is the purpose of the <Outlet /> component in React Router v6?",
      code: "",
      options: [
        "It helps in lazy loading components.",
        "It’s a replacement for the <Link> component.",
        "It is used for programmatic navigation.",
        "It is used to render the matched child route's element within a parent route's element.",
      ],
      correctIndex: 3,
      explanation:
        "The <Outlet /> component is a placeholder used in parent route elements to indicate where a child route element should be rendered, which is essential for nested routing."
    },
    {
      id: 2,
      question: "What is the primary use case for the useRoutes hook?",
      code: "",
      options: [
        "It is used to get a list of all available routes in the application.",
        "It’s a direct replacement for createBrowserRouter.",
        "It’s used for navigating between routes.",
        "It’s the hook equivalent of <Routes>, allowing you to define your route configuration as a JavaScript object within a component.",
      ],
      correctIndex: 3,
      explanation:
        "The useRoutes hook returns the route configuration object and handles the rendering for the current location."
    },
    {
      id: 3,
      question: "How do you create a catch-all route in React Router v6?",
      code: "",
      options: ["path='/='", "path='/all'", "path='*'", "path='/y=='"],
      correctIndex: 2,
      explanation:
        "A route with path='*' matches any URL that hasn't been matched by other routes."
    },
    {
      id: 4,
      question: "Which is the correct way to pass state during navigation?",
      code: "",
      options: [
        "navigate('/path', state: { data })",
        "navigate('/path', state: { 'path': state })",
        "navigate('/path', { data })",
        "navigate('/path', {state: data })",
      ],
      correctIndex: 3,
      explanation:
        "State is passed as a second argument object with a state property to the navigate function."
    },
    {
      id: 5,
      question: "What information does the useLocation hook provide?",
      code: "",
      options: [
        "An object representing the current URL including pathname, search, and hash properties.",
        "The component that is currently being rendered.",
        "A function to change the current URL.",
        "An object of URL parameters.",
      ],
      correctIndex: 0,
      explanation:
        "The useLocation hook returns the current location object, which contains details about the URL like the path, query parameters (search), and hash fragment."
    },
    {
      id: 6,
      question: "What happens if you call navigate('/users') while already on /users?",
      code: "",
      options: [
        "Nothing happens.",
        "Page reloads.",
        "Navigation occurs but component doesn’t re-render.",
        "Error is thrown.",
      ],
      correctIndex: 2,
      explanation:
        "By default, navigating to the same route doesn't cause a re-render; the component maintains its state."
    },
    {
      id: 7,
      question: "What is the primary purpose of the <NavLink> component compared to <Link>?",
      code: "",
      options: [
        "It has no functional difference from <Link>.",
        "It knows whether or not it is 'active' and can be styled accordingly.",
        "It is used for external links only.",
        "It is a deprecated component.",
      ],
      correctIndex: 1,
      explanation:
        "<NavLink> is a special version of <Link> that can apply styling to itself when its prop matches the current URL, making it ideal for navigation menus."
    },
    {
      id: 8,
      question: "Which hook is used for programmatic navigation?",
      code: "",
      options: [
        "useRoute",
        "useNavigate",
        "useRedirect",
        "useHistory",
      ],
      correctIndex: 1,
      explanation:
        "The useNavigate hook returns a function that is called directly with the path as an argument."
    },
    {
      id: 9,
      question: "What is the main advantage of using <Link> over a standard <a> tag for internal navigation?",
      code: "",
      options: [
        "<Link> prevents a full page reload, providing a single-page application (SPA) experience.",
        "<Link> allows for styling, whereas <a> does not.",
        "<Link> automatically adds an active class.",
        "There is no significant difference.",
      ],
      correctIndex: 0,
      explanation:
        "<Link> intercepts the navigation event and updates the URL via the History API, preventing the browser from making a full page request to the server, which is fundamental to SPAs."
    },
    {
      id: 10,
      question: "Which is the correct way to define a route with a dynamic parameter?",
      code: "",
      options: [
        "path='/users/$userId'",
        "path='/users/:userId'",
        "path='/users/$userId/:details'",
        "path='/users/:userId/details'",
      ],
      correctIndex: 1,
      explanation:
        "React Router uses the ':paramName' syntax for dynamic URL parameters."
    },
    {
      id: 11,
      question: "How do you navigate programmatically using useNavigate?",
      code: "",
      options: [
        "navigate.go('/path')",
        "navigate.push('/path')",
        "navigate.to('/path')",
        "navigate('/path')",
      ],
      correctIndex: 3,
      explanation:
        "The useNavigate hook returns a function that is called directly with the path as an argument."
    },
    {
      id: 12,
      question: "How do you access URL parameters in React Router?",
      code: "",
      options: [
        "props.match.params",
        "useMatch()",
        "useParams()",
        "getParams()",
      ],
      correctIndex: 2,
      explanation:
        "The useParams hook returns an object of key-value pairs of URL parameters in React Router v6."
    },
    {
      id: 13,
      question: "Which prop is used to specify the component to render for a route?",
      code: "",
      options: ["render", "component", "element", "children"],
      correctIndex: 2,
      explanation:
        "React Router v6 uses the 'element' prop instead of 'component', accepting JSX elements directly."
    },
    {
      id: 14,
      question: "Which hook is used to access dynamic parameters from the URL (e.g., :id in /users/:id)?",
      code: "",
      options: ["useMatch()", "useParams()", "useRouteMatch()", "useLocation()"],
      correctIndex: 1,
      explanation:
        "The useParams hook returns an object of key-value pairs of dynamic URL parameters."
    },
    {
      id: 15,
      question: "How do you define an index route in React Router v6?",
      code: "",
      options: [
        "<Route path='index' element={<Home />} />",
        "<Route path='/index' element={<Home />} />",
        "<Route index element={<Home />} />",
        "<Route path='/index' element={<Home />} />",
      ],
      correctIndex: 2,
      explanation:
        "An index route renders in the parent's <Outlet /> at the parent's path. It’s defined by setting the index prop to true on a route object within the children array."
    },
    {
      id: 16,
      question: "How do you implement a 'Not Found' page in React Router v6?",
      code: "",
      options: [
        "Create a route with path='*' as the last route",
        "Use the notFound prop",
        "Use an error boundary only",
        "Create a route with path='/404'",
      ],
      correctIndex: 0,
      explanation:
        "A catch-all route with path='*' placed as the last route will match unmatched URLs, perfect for 404 pages."
    },
    {
      id: 17,
      question: "What prop is used to handle errors in a route?",
      code: "",
      options: ["onError", "errorComponent", "error", "errorElement"],
      correctIndex: 3,
      explanation:
        "The errorElement prop specifies the component to render when an error occurs in a route."
    },
    {
      id: 18,
      question: "What hook provides access to the current location object?",
      code: "",
      options: ["useRoute()", "useURL()", "useLocation()", "usePath()"],
      correctIndex: 2,
      explanation:
        "The useLocation hook returns the location object representing the current URL."
    },
    {
      id: 19,
      question: "What component is used to render nested routes in React?",
      code: "",
      options: ["Outlet", "Children", "Nested", "SubRoute"],
      correctIndex: 0,
      explanation:
        "The <Outlet /> component renders child routes within a parent route component."
    },
    {
      id: 20,
      question: "How do you define a default or 'index' route for a nested route structure in React Router v6?",
      code: "",
      options: [
        "By adding the exact prop to a route.",
        "By creating a route with path='/'.",
        "By adding a route object with the index prop set to true inside the children array.",
        "By creating a route with an empty path '/*'.",
      ],
      correctIndex: 2,
      explanation:
        "An index route renders in the parent's <Outlet /> at the parent's path. It's defined by setting the index prop to true on a route object within the children array."
    },
  ]
};
