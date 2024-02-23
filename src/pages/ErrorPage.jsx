import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="Error-container">
      <img alt="404 error image" />
      <h1>Oops! Page Not Found</h1>
      <p>The requested URL was not found on our server.</p>
      <button onClick={() => navigate("/")}>Go to the homepage</button>
    </div>
  );
};

export default ErrorPage;
