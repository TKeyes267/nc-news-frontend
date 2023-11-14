import { Link } from "react-router-dom";
import { useState } from "react";

const Topics = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav>
        <ul className="flex flex-row gap-8 mx-4 py-1 bg-plaster text-tar">
          <li>
            <Link to={`/`}>
              <h2 className="p-1 hover:bg-concrete hover:text-plaster font-poppins">
                Home
              </h2>
            </Link>
          </li>
          <li>
            <Link to={`/articles`}>
              <h2 className="p-1 hover:bg-concrete hover:text-plaster font-poppins">
                Articles
              </h2>
            </Link>
          </li>
          <li>
            <Link to={`/articles?topic=coding`}>
              <h2 className="p-1 hover:bg-concrete hover:text-plaster font-poppins">
                Coding
              </h2>
            </Link>
          </li>
          <li>
            <Link to={`/articles?topic=football`}>
              <h2 className="p-1 hover:bg-concrete hover:text-plaster font-poppins">
                Football
              </h2>
            </Link>
          </li>
          <li>
            <Link to={`/articles?topic=cooking`}>
              <h2 className="p-1 hover:bg-concrete hover:text-plaster font-poppins">
                Cooking
              </h2>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Topics;
