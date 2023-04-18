import { Link } from "react-router-dom";

const Header = () => {
  return (
    <main className="App-header">
      <h1>
        <Link to="/articles">NC News</Link>
      </h1>
      <nav>
        <ul className="Nav">
          <li>
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <Link to="/">Sign Out</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default Header;
