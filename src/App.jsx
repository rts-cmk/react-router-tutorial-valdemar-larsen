import { createBrowserRouter, RouterProvider } from "react-router";

// Import your page components
import Home from "./pages/Home.jsx";
import Intro from "./pages/Intro.jsx";
import Setup from "./pages/Setup.jsx";
import Examples from "./pages/Examples.jsx";
import Conclusion from "./pages/Conclusion.jsx";
import ErrorPage from "./pages/error.jsx";
import "./style/main.css";

// Create the router configuration
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "intro",
        element: <Intro />,
      },
      {
        path: "setup",
        element: <Setup />,
      },
      {
        path: "examples",
        element: <Examples />,
      },
      {
        path: "conclusion",
        element: <Conclusion />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
