import "../style/main.css";
import { Link } from "react-router";

function Home() {
  return (
    <main>
      <section id="home" className="home">
        <h1>Welcome to React Router Guide</h1>
        <p>
          This comprehensive guide will walk you through everything you need to
          know about React Router, from basic concepts to advanced
          implementation techniques.
        </p>

        <div className="home-navigation">
          <h2>What you'll learn:</h2>
          <ul>
            <li>
              <strong>Introduction:</strong> Understanding what React Router is
              and why it's useful
            </li>
            <li>
              <strong>Setup:</strong> Quick and simple setup guide
            </li>
            <li>
              <strong>Examples:</strong> Practical code examples and use cases
            </li>
          </ul>
        </div>

        <div className="getting-started">
          <h2>Getting Started</h2>
          <p>
            Click the big fancy green button below to learn about React Router
            step by step. Each section builds upon the previous one, so we
            recommend following the order for the best learning experience.
          </p>
        </div>

        <div className="start-learning">
          <Link to="/intro" className="start-learning-button">
            Start Learning
            <span className="arrow">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
