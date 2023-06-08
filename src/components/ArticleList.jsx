import { useState, useEffect } from "react";
import { getArticles, getComments } from "../Api";
import { Link, useSearchParams } from "react-router-dom";
import Topics from "./Topics";

const ArticleList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [searchParams] = useSearchParams();

  const topic = searchParams.get("topic");
  const [order, setOrder] = useState("");
  const [sortBy, setSortBy] = useState("");

  const handleOrderByChange = (event) => {
    setOrder(event.target.value);
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  useEffect(() => {
    setIsLoading(true);

    getArticles(topic, sortBy, order).then((data) => {
      console.log(sortBy);
      setArticles(data);
      setIsLoading(false);
    });
  }, [topic, sortBy, order]);

  return (
    <main className="ArticleList">
      <Topics setArticles={setArticles} />
      <br></br>
      <div className="filter">
        <select
          name="sortList"
          id="sortList"
          value={sortBy}
          onChange={handleSortByChange}
        >
          <option value="" disabled defaultValue>
            Sort by:
          </option>
          <option value="created_at">Date created</option>
          <option value="votes">Likes</option>
          <option value="author">Author</option>
        </select>{" "}
        <select
          name="orderList"
          id="orderList"
          value={order}
          onChange={handleOrderByChange}
        >
          <option value="" disabled defaultValue>
            Order by:
          </option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <ul>
        {isLoading ? (
          <li>Loading...</li>
        ) : (
          articles.map((article) => {
            return (
              <li key={article.article_id}>
                <div className="ArticleCard">
                  <h3>{article.title}</h3>
                  <p>By {article.author}</p>
                </div>
                <Link to={`/articles/${article.article_id}`}>
                  <img src={article.article_img_url} />
                </Link>
              </li>
            );
          })
        )}
      </ul>
    </main>
  );
};

export default ArticleList;
