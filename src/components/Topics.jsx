import { Link } from "react-router-dom";
import { useState } from "react";

const Topics = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="TopicsNav">
        <ul>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`/articles`}>Articles</Link>
          </li>
          <li>
            <Link to={`/articles?topic=coding`}>Coding</Link>
          </li>
          <li>
            <Link to={`/articles?topic=football`}>Football</Link>
          </li>
          <li>
            <Link to={`/articles?topic=cooking`}>Cooking</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Topics;
