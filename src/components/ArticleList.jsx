import { useState, useEffect } from "react";
import { getArticles } from "../Api";
import { Link, useSearchParams } from "react-router-dom";
import moment from "moment";
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
    <div className="ArticleListBackground">
      <Topics setArticles={setArticles} />
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
      <main className="ArticleList">
        <ul>
          {isLoading ? (
            <li>Loading...</li>
          ) : (
            articles.map((article) => {
              return (
                <div className="ArticleCard">
                  <Link to={`/articles/${article.article_id}`}>
                    <li key={article.article_id}>
                      <h3>{article.title}</h3>
                      <p>By {article.author}</p>
                      <p>{moment(article.created_at).format("MMMM Do YYYY")}</p>
                      <img src={article.article_img_url} alt="article cover" />
                    </li>
                  </Link>
                </div>
              );
            })
          )}
        </ul>
      </main>
    </div>
  );
};

export default ArticleList;
