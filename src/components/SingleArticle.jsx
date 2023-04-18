import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../Api";

const SingleArticle = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then((data) => {
        setArticle(data);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, [article_id]);

  console.log(article);

  return (
    <main className="Article">
      {isLoading ? (
        <li>Loading</li>
      ) : (
        <ul>
          <img src={article.article_img_url} />
          <h2>{article.title}</h2>
          <h3>By {article.author}</h3>
          <p>{article.created_at}</p>
          <p>Votes: {article.votes}</p>
          <p>{article.body}</p>
        </ul>
      )}
    </main>
  );
};

export default SingleArticle;
