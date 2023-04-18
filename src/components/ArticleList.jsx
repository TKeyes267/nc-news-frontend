import { useState, useEffect } from "react";
import { getArticles } from "../Api";

const ArticleList = ({ articles, setArticles }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticles().then((res) => {
      setArticles(res.articles);
      setIsLoading(false);
    });
  }, []);

  return (
    <main className="ArticleList">
      <h2>ARTICLES</h2>
      <ul>
        {isLoading ? (
          <li>Loading</li>
        ) : (
          articles.map((article) => {
            return (
              <li key={article.article_id}>
                <div>
                  <p>{article.author}</p>
                  <p>{article.title}</p>
                  <img src={article.article_img_url} />
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
