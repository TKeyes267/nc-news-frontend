import { Link } from "react-router-dom";

const Header = () => {
  return (
    <main className="Header">
      <h1>
        <Link to="/articles">Ancoats Post</Link>
      </h1>
    </main>
  );
};

export default Header;
