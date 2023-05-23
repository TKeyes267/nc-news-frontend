import { useState, useEffect } from "react";
import { getArticles, getComments } from "../Api";
import { Link, useSearchParams } from "react-router-dom";
import Topics from "./Topics";

const ArticleList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [searchParams] = useSearchParams();

  const topic = searchParams.get("topic");

  useEffect(() => {
    setIsLoading(true);

    getArticles(topic).then((data) => {
      setArticles(data);
      setIsLoading(false);
    });
  }, [topic]);

  return (
    <main className="ArticleList">
      <Topics setArticles={setArticles} />
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
