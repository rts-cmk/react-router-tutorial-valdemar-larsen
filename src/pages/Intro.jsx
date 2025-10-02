import PageNavigation from "../components/Nav/Nav.jsx";

function Intro() {
  return (
    <main>
      <section id="Intro" className="Intro">
        <h1>
          React Router - a simple guide
          <br />
          Intro
        </h1>

        <h2>what is React Router?</h2>
        <p>
          Put simply, React Router is a library that lets you create mutiple
          "pages" without actually creating multiple pages. So how does that
          work? React Router uses something called "routing" to determine what
          to show on the page based on the URL. For example, if you have a URL
          like "www.example.com/about", React Router will show you the "about"
          page. The same as a traditional website would do. But instead of
          loading a new page, React Router updates the current page dynamically,
          without a full page reload. This makes loading MUCH faster and
          provides a smoother user experience.
        </p>
        <h2>Why use React Router?</h2>
        <p>
          There are many other benefits to using React Router, but to keep it
          simple, I'll just mention one key reason. In the first section, I
          mentioned that react router updates the page dynamically, this is a
          key reason why this is beneficial for the user experience. By only
          updating the parts of the page that need to change, React Router can
          provide a faster and more seamless navigation experience. For example,
          on a webpage there may be a navigation bar and a footer. Most likely,
          these elements will remain the same across different pages. With React
          Router, when a user navigates to a new page, only the main content
          area of the page needs to be updated, while the navigation bar and
          footer can remain unchanged. This results in a faster and more
          efficient navigation experience for the user.
        </p>
      </section>
      <PageNavigation />
    </main>
  );
}

export default Intro;
