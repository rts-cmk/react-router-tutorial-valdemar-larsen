import PageNavigation from "../components/nav/nav.jsx";
import default_error_image from "../assets/error_default_example.png";

function examples() {
  return (
    <main>
      <section id="examples" className="examples">
        <h1>React Router Examples</h1>
        <h2>Using Link and useNavigate</h2>
        <p>
          So a question you may have is, how do we navigate between pages since
          they arent like standard pages? For that, we have 2 very useful tools
          to navigate in react router, Link and useNavigate. To explain it
          simply, Link is used when you want to navigate when writing the html
          of jsx, like here:
        </p>
        <pre>
          <code>{`import { Link } from "react-router-dom";

function MyComponent() {

  return <Link to="/about">Go to About Page</Link>;
}`}</code>
        </pre>
        <p>
          Pretty straight forward, right? Basically as simple as with an a tag.
        </p>
        <p>
          Now, with useNavigate, its a bit different. useNavigate is a hook,
          which means we can only use it inside a functional component. We use
          useNavigate when we want to navigate programmatically, for example,
          when a user submits a form or clicks a button. Here is an example of
          of just that:
        </p>
        <pre>
          <code>{`import { useNavigate } from "react-router";

function MyComponent() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  return <button onClick={handleClick}>Go to About Page</button>;
}
`}</code>
        </pre>
        <p>
          So basically: When programming we use, useNavigate, when writing HTML
          we use Link
        </p>
        <h2>Error code handling</h2>
        <p>
          So for the last part here, lets talk about error code handling in
          react router. Say, you want to go to about. But you type abut instead,
          what happens then? Currently, nothing. Or, thats what I would of said
          in the past but now, react router actually DOES provide some basic
          error handling out of the box. So if I typed Abut, I would get a page
          that looks something like this:
        </p>
        <img src={default_error_image} alt="Error code example" />
        <p>
          Hey, props to the react router team for adding some default error
          handling, but we really should look at the error message and do what
          it says, so lets talk about errorBoundary and errorElement.
        </p>
        <p>
          Okay, so errorBoundary is a property that we can add to our route
          objects, just like with path and children that we used earlier.
          errorBoundary is used to specify a component that willl be rendered
          When an error occurs during the rendering of the route or any of its
          children. This is useful for catching and handling errors that may
          occur in our components, such as network errors or unexpected data.
          Here is an example of how to use errorBoundary:
        </p>
        <pre>
          <code>
            {`const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorBoundary: <ErrorBoundary />,
  },
  {
    path: "/about",
    element: <About />,
    errorBoundary: <ErrorBoundary />,
  },
]);
`}
          </code>
        </pre>
        <p>
          In this example, if an error occurs on the Home page, the
          ErrorBoundary component will be displayed instead. The same goes for
          the About page. This way, instead of the app crashing or showing a
          blank screen, users see a friendly error message.
        </p>
        <p>
          However, there's actually a better way! As mentioned earlier, with
          createBrowserRouter, we also have the <strong>errorElement</strong>{" "}
          property. The errorElement is the modern approach and works the same
          way - it displays a custom component when something goes wrong. Here's
          how to use it:
        </p>
        <pre>
          <code>
            {`const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);`}
          </code>
        </pre>
        <p>
          By adding errorElement to our root route, any error in our app -
          including 404 errors from mistyped URLs - will show our custom
          ErrorPage component instead of the default error screen. Now to finish
          up, let's create a simple ErrorPage component that we can display when
          something goes wrong in our router:
        </p>
        <pre>
          <code>
            {`import { useRouteError } from "react-router";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <h1>Oops! Something went wrong</h1>
      <p>{error.statusText || error.message}</p>
      <Link to="/">Go back home</Link>
    </div>
  );
}

export default ErrorPage;
`}
          </code>
        </pre>
        <p>
          The useRouteError hook gives us access to the error details, so we can
          display helpful information to the user. That's it! Now our little app
          has proper error handling.
        </p>
      </section>
      <PageNavigation />
    </main>
  );
}

export default examples;
