import { useState, useEffect } from "react";
import { getArticles } from "../Api";
import { useParams, Link } from "react-router-dom";

const ArticleList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getArticles().then((data) => {
      setArticles(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <main className="ArticleList">
      <h2>Articles</h2>
      <ul>
        {isLoading ? (
          <li>Loading...</li>
        ) : (
          articles.map((article) => {
            return (
              <li key={article.article_id}>
                <div>
                  <h3>{article.title}</h3>
                  <p>By {article.author}</p>
                  <Link to={`/articles/${article.article_id}`}>
                    <img src={article.article_img_url} />
                  </Link>
                </div>
              </li>
            );
          })
        )}
      </ul>
    </main>
  );
};

export default ArticleList;
