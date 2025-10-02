import PageNavigation from "../components/Nav/Nav.jsx";

function Conclusion() {
  return (
    <main>
      <section id="Conclusion" className="Conclusion">
        <h1>Conclusion</h1>
        <p>
          So, this short guide covers a very basic overview of react router. But
          there is so much more to explore and learn about this powerful
          library. So I highly recommend checking out the official documentation
          and taking this simple app we've made and expanding on it.
          <br />
          <br /> Link to their docs:{" "}
          <a
            href="https://reactrouter.com/en/main"
            target="_blank"
            rel="noopener noreferrer">
            reactrouter.com
          </a>
        </p>
        <p>
          Lastly, I just quickly want to mention why exactly we avoid a tags at
          all cost. So that no one reads this and thinks "why not just use a
          tags, they work fine". The reason is that a tags will cause a full
          page reload, which is exactly what we are trying to avoid by using
          react router in the first place. So please, for the love of smooth
          navigation, avoid a tags when working with react router. That said, fx
          with the link I put above to react router, that is an a tag. Because
          it links to an external site, so in that case its perfectly fine to
          use an a tag. In fact you should use a tags for external links.
          Because the other types of linking
          {`(Link, NavLink, etc.)`} are specifically designed for internal
          navigation within your React app. I just wanted to clarify that to
          avoid any confusion.
        </p>
        <p>Good luck on your react router journey. Thanks for reading!</p>
      </section>
      <PageNavigation />
    </main>
  );
}

export default Conclusion;
