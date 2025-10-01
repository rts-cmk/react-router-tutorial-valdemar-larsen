import { Link, useLocation } from "react-router";
import "./nav.css";

// Define the page sequence for navigation
const pageSequence = [
  { path: "/intro", title: "Introduction" },
  { path: "/setup", title: "Setup" },
  { path: "/examples", title: "Examples" },
  { path: "/conclusion", title: "Conclusion" },
];

export default function PageNavigation() {
  const location = useLocation();
  const currentPath = location.pathname;

  // Find current page index in sequence
  const currentIndex = pageSequence.findIndex(
    (page) => page.path === currentPath
  );

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  if (currentIndex === -1) {
    return null;
  }

  // Get previous and next pages
  const previousPage = currentIndex > 0 ? pageSequence[currentIndex - 1] : null;
  const nextPage =
    currentIndex < pageSequence.length - 1
      ? pageSequence[currentIndex + 1]
      : null;

  return (
    <nav className="page-navigation">
      <div className="nav-buttons">
        {/* Previous button */}
        <div className="nav-button-container">
          {previousPage ? (
            <Link
              to={previousPage.path}
              className="nav-button prev-button"
              onClick={scrollToTop}>
              <span className="arrow">←</span>
              <div className="button-text">
                <span className="button-label">Previous</span>
                <span className="button-title">{previousPage.title}</span>
              </div>
            </Link>
          ) : (
            <div className="nav-button prev-button disabled">
              <span className="arrow">←</span>
              <div className="button-text">
                <span className="button-label">Previous</span>
                <span className="button-title">None</span>
              </div>
            </div>
          )}
        </div>

        {/* Next button */}
        <div className="nav-button-container">
          {nextPage ? (
            <Link
              to={nextPage.path}
              className="nav-button next-button"
              onClick={scrollToTop}>
              <div className="button-text">
                <span className="button-label">Next</span>
                <span className="button-title">{nextPage.title}</span>
              </div>
              <span className="arrow">→</span>
            </Link>
          ) : (
            <div className="nav-button next-button disabled">
              <div className="button-text">
                <span className="button-label">Next</span>
                <span className="button-title">None</span>
              </div>
              <span className="arrow">→</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
