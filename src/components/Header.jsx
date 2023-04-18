import { Link } from "react-router-dom";

const Header = () => {
  return (
    <main className="App-header">
      <h1> NC News </h1>
      <nav>
        <ul className="Nav">
          <li>
            <Link to="/articles">Home</Link>
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
