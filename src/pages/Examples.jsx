import PageNavigation from "../components/Nav/Nav.jsx";
import default_error_image from "../assets/error_default_example.png";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyCode from "../components/CopyCode/CopyCode.jsx";

function Examples() {
  return (
    <main>
      <section id="examples" className="examples">
        <h1>React Router Examples</h1>
        <h2>Using Link, useNavigate and NavLink</h2>
        <p>
          So a question you may have is, how do we navigate between pages since
          they arent like standard pages? For that, we have 3 very useful tools
          to navigate in react router, Link, useNavigate and NavLink. Lets go
          over all of them one by one. First up, Link:
        </p>
        <CopyCode>
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`import { Link } from "react-router";

function MyComponent() {

  return <Link to="/about">Go to About Page</Link>;
}`}
          </SyntaxHighlighter>
        </CopyCode>
        <p>
          Pretty straight forward, right? Basically as simple as with an a tag.
          Another cool thing we can do with Link is prefetching. Prefetching can
          be done in a few different ways, so lets go over them:
        </p>
        <ul>
          <li>
            <code>{`<Link prefetch="none" />`}</code>: Disables prefetching for
            this link. This is the default behavior.
          </li>
          <li>
            <code>{`<Link prefetch="intent"`}</code>: Prefetches the linked page
            when the user hovers over the link.
          </li>
          <li>
            <code>{`<Link prefetch="viewport"`}</code>: Prefetches the linked
            page when it comes into the viewport.
          </li>
          <li>
            <code>{`<Link prefetch="render"`}</code>: Prefetches the linked page
            as soon as the link is rendered.
          </li>
        </ul>
        <p>
          Prefetching is a great way to make your app feel faster and more
          responsive, but is best suited for links that users are likely to
          click, such as navigation menus or common page transitions. Just be
          mindful not to overuse it, as prefetching too many pages can waste
          bandwidth {`(can be costly)`} and consume unnecessary data.
        </p>
        <p>
          Now, I mentioned navigation menus above, and so lets talk about
          NavLinks. Put simply, NavLink is an enhanced version of link. Its like
          the "less dumb version" of Link. Now, as you may have guessed, NavLink
          is often used for navigation menus. The reason for this is that
          NavLink can automatically apply an "active" class to the link when it
          matches the current URL. This is super useful for highlighting the
          current page in a navigation menu. Here is an example of how to use
          NavLink:
        </p>
        <CopyCode>
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`import { NavLink } from "react-router";

function MyComponent() {

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
}`}
          </SyntaxHighlighter>
        </CopyCode>
        <p>
          In this example, the NavLink component will automatically apply the
          "active" class to the link that matches the current URL. You can then
          style the active link using CSS like{" "}
          <code>a.active {"{ color: red; }"}</code>. This way, users can easily
          see which page they are currently on. Stuff like this can also be done
          with Link, but NavLink is purpose built for it and makes it much
          easier. If you need more control over the class names or want to add
          custom logic, you can also use a function for the className prop:{" "}
          <code>{`className={({ isActive }) => isActive ? "my-custom-class" : ""}`}</code>
          .
        </p>
        <p>
          We can also add props to NavLink, for example we can use the
          caseSensitive prop to make the link case sensitive. This means that
          the link will only be active if the URL matches exactly, including the
          case. Like this:
        </p>
        <CopyCode>
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`<NavLink to="/about" caseSensitive>About</NavLink>`}
          </SyntaxHighlighter>
        </CopyCode>
        <p>
          In this example, the "About" link will only be active if the URL is
          exactly "/About", and not for "/about" or any other variations like
          "/ABoUt". This can be useful for ensuring that users are directed to
          the correct page, especially in cases where the URL structure is
          important.
        </p>
        <p>
          Now, with useNavigate, its a bit different. useNavigate is a hook,
          which means we can only use it inside a functional component. We use
          useNavigate when we want to navigate programmatically, for example,
          when a user submits a form or clicks a button. Here is an example of
          of just that:
        </p>
        <CopyCode>
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`import { useNavigate } from "react-router";

function MyComponent() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  return <button onClick={handleClick}>Go to About Page</button>;
}`}
          </SyntaxHighlighter>
        </CopyCode>
        <p>
          So basically: When programming we use useNavigate, when writing HTML
          we use Link
        </p>
        <h2>Error code handling</h2>
        <p>
          So for the last part here, lets talk about error code handling in
          react router. Say, you want to go to the about page. But you type abut
          instead, what happens then? Currently, nothing. Or, thats what I would
          of said in the past but now, react router actually DOES provide some
          basic error handling out of the box. So if I typed Abut, I would get a
          page that looks something like this:
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
        <CopyCode>
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
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
]);`}
          </SyntaxHighlighter>
        </CopyCode>
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
        <CopyCode>
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
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
          </SyntaxHighlighter>
        </CopyCode>
        <p>
          By adding errorElement to our root route, any error in our app -
          including 404 errors from mistyped URLs - will show our custom
          ErrorPage component instead of the default error screen. Now to finish
          up, let's create a simple ErrorPage component that we can display when
          something goes wrong in our router:
        </p>
        <CopyCode>
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`import { useRouteError, Link } from "react-router";

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

export default ErrorPage;`}
          </SyntaxHighlighter>
        </CopyCode>
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

export default Examples;
