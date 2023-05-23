import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticles } from "../Api";

const Topics = () => {
  return (
    <nav className="TopicsNav">
      <ul>
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
  );
};

export default Topics;
