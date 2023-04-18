import { useState, useEffect } from "react";
import { getArticles } from "../Api";

const ArticleList = ({ articles, setArticles }) => {
  useEffect(() => {
    getArticles().then((res) => {
      console.log(res);
      setArticles(res.articles);
    });
  }, []);

  return (
    <main className="ArticleList">
      {/* <h2>ARTICLES HERE</h2> */}
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <div>
                <p>{article.author}</p>
                <p>{article.title}</p>
                <img src={article.article_img_url} />
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default ArticleList;
