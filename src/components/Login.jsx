import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="Home">
      <div className="Login">
        <h1>Welcome to NC News</h1>
        <p>You are logged in as GUEST</p>

        <Link to="/articles">
          <h2>Go to Articles</h2>
        </Link>
      </div>
    </div>
  );
};

export default Login;
