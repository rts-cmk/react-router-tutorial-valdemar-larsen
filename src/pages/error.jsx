import { useRouteError, Link } from "react-router";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="error-page">
      <div className="error-content">
        <h1>Oops! Something went wrong</h1>
        <p>{error.statusText || error.message}</p>
        <Link to="/" className="error-home-link">
          ← Go back home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
