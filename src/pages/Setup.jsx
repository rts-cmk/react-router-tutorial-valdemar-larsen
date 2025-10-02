import PageNavigation from "../components/Nav/Nav.jsx";
import CopyCode from "../components/CopyCode/CopyCode.jsx";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

function Setup() {
  return (
    <main>
      <section id="Setup" className="Setup">
        <h1>How to Use React Router</h1>
        <h2>Getting Started</h2>
        <p>
          To get started with React Router, you'll first need to install it via
          npm or yarn. But before you do that, you should make a react project.
          In This demonstration, I'll be using vite to create a react project.
          To start we need to run the following command in the terminal:
        </p>
        <CopyCode>
          <SyntaxHighlighter language="bash" style={vscDarkPlus}>
            {`npm create vite@latest .`}
          </SyntaxHighlighter>
        </CopyCode>
        <p>
          This command creates a new vite+react project in our current folder.
          After running the command and finishing the setup, we can now proceed
          to installing react router!. To install react router, run the
          following command in the terminal:
        </p>
        <CopyCode>
          <SyntaxHighlighter language="bash" style={vscDarkPlus}>
            {`npm install react-router`}
          </SyntaxHighlighter>
        </CopyCode>
        <p>
          Great! Now that we have our react project up and running and react
          router installed, we can get started with implementing it in our
          project!
        </p>
        <h2>Setting up our files</h2>
        <p>
          Alright, so before we start using react router, we need to set up our
          files first. So, for this guide, we will be creating 3 pages, a home
          page, an about page, and a contact page. To set this up, navigate to
          the src folder in your project directory and create a folder called
          "pages". Inside the pages folder, create three files named Home.jsx,
          About.jsx, and Contact.jsx. Each of these files will represent a
          different page in our app.
        </p>
        <p>
          Next we will add some basic content to each of these files so we can
          easily identify them later. In Home.jsx, add the following code:
        </p>
        <CopyCode>
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`function Home() {
  return (
    <main>
      <h1>Home</h1>
      <p>This is the home page.</p>
    </main>
  );
}

export default Home;`}
          </SyntaxHighlighter>
        </CopyCode>
        <p>In About.jsx, add the following code:</p>
        <CopyCode>
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`function About() {
  return (
    <main>
      <h1>About</h1>
      <p>This is the about page.</p>
    </main>
  );
}

export default About;`}
          </SyntaxHighlighter>
        </CopyCode>
        <p>In Contact.jsx, add the following code:</p>
        <CopyCode>
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`function Contact() {
  return (
    <main>
      <h1>Contact</h1>
      <p>This is the contact page.</p>
    </main>
  );
}

export default Contact;`}
          </SyntaxHighlighter>
        </CopyCode>
        <h2>Basic Implementation of react router</h2>
        <p>
          Now, its important to clarify that there are many ways to implement
          react router into your project. But for this guide, i'll be showing
          you the most basic and common way to do it.
        </p>
        <p>
          First, we need to set up our routes, we will do this in our app.jsx
          file. We will start by importing the neccesary components from
          react-router. We can do that as follows:
        </p>
        <CopyCode>
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`import { createBrowserRouter, RouterProvider } from "react-router";`}
          </SyntaxHighlighter>
        </CopyCode>
        <p>We will also need to import react, so lets do that too:</p>
        <CopyCode>
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`import React from "react";`}
          </SyntaxHighlighter>
        </CopyCode>
        <p>
          Great! Thats really all we need for a simple implementation of react
          router! Now lets set up our routes in app.jsx.
          <br />
          <br />
          <span>
            NOTE: In case its confusing when I say "routes", try to think of a
            route as a "page", I hope that makes it easier to understand.
          </span>
        </p>
        <p>
          Lastly, we need to import our page components so we can use them in
          our router. We can do that like this:
        </p>
        <CopyCode>
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";`}
          </SyntaxHighlighter>
        </CopyCode>
        <p>
          Alright great! Now that we have all our imports set up, we can proceed
          to setting up our routes!
        </p>
        <p>
          To set up our routes we will need to use the createBrowserRouter
          function that we imported earlier from react-router. This function
          takes an array of route objects as an argument, where each object
          represents a route in our application. It may sound complicated but
          its actually quite simple to setup. Lets look at an example of how to
          set up our routes using createBrowserRouter:
        </p>
        <CopyCode>
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);`}
          </SyntaxHighlighter>
        </CopyCode>
        <p>
          As you can see, its quite easy to read, the only thing you really need
          to know is that index means the page that will be shown as the front
          page of the website. Still, lets break it down to really understand
          whats going on here.
        </p>
        <p>
          First we have the path property, this defines the starting URL path
          for the router. So any routes we create will be relative to this path.
          In this case, we set it to "/", which is the root path of the website.
          Next we have the children property, this is an array that contains all
          the routes we want to define. Each route is represented as an object
          with its own properties. Lets look at the first route object in the
          children array:
        </p>
        <CopyCode>
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`children: [
  {
    index: true,
    element: <Home />,
  },`}
          </SyntaxHighlighter>
        </CopyCode>
        <p>
          So here we have 2 properties. index and element. The index property we
          use here to say, "Hey, we want this to be the route that is shown as
          the front page of the website". Next we have the element property,
          this is where the imports we made earlier come into play. Earlier, we
          imported all our page components, Home, About and Contact. Here in the
          element property, we specify which component should be rendered when
          this route is active. In this case, we want the Home component to be
          rendered when the user visits the root path of the website.
        </p>
        <p>
          Lastly, to get everything working, we need to use our new router in
          the app function. We can do that like this:
        </p>
        <CopyCode>
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`function App() {
  return <RouterProvider router={router} />;
}`}
          </SyntaxHighlighter>
        </CopyCode>
        <p>
          Now that we've gone over the basic setup, creating our pages,
          importing them into app.jsx and setting up our routes, we can proceed
          to some examples for how to work with react router! I will be showing
          exactly that in the next section!
        </p>
      </section>
      <PageNavigation />
    </main>
  );
}

export default Setup;
