import { Link } from "react-router-dom";

const Header = () => {
  return (
    <main>
      <Link to="/articles">
        <h1 className="bg-concrete text-plaster p-4 text-4xl font-tit">
          Ancoats Post
        </h1>
      </Link>
    </main>
  );
};

export default Header;
