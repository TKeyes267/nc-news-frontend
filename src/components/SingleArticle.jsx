import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, getComments } from "../Api";

const SingleArticle = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then((data) => {
        setArticle(data);
        setIsLoading(false);
      })
      .then(() => {
        getComments(article_id).then((data) => {
          setComments(data);
          setIsLoading(false);
          console.log(data);
        });
      });
  }, [article_id]);

  if (error) {
    return <h2>Something went wrong...</h2>;
  } else {
    return (
      <main className="Article">
        {isLoading ? (
          <li>Loading...</li>
        ) : (
          <div>
            <ul>
              <img src={article.article_img_url} />
              <h2>{article.title}</h2>
              <h3>By {article.author}</h3>
              <p>{article.created_at}</p>
              <p>Votes: {article.votes}</p>
              <p>{article.body}</p>
            </ul>
            <ul className="Comments">
              <h2>Comments</h2>
              {comments.map((comment) => {
                return (
                  <li key={comment.comment_id}>
                    <div>
                      <h3>{comment.author}</h3>
                      <p>{comment.body}</p>
                      <p>Votes: {comment.votes}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </main>
    );
  }
};
export default SingleArticle;
