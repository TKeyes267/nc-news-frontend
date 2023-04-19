import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, getComments } from "../Api";
import ArticleVote from "./ArticleVote";
import moment from "moment";

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
              <p>{moment(article.created_at).format("MMMM Do YYYY")}</p>
              <img src={article.article_img_url} />
              <h2>{article.title}</h2>
              <h3>By {article.author}</h3>
              <p>{article.body}</p>

              <ArticleVote
                votes={article.votes}
                article_id={article.article_id}
                error={error}
              />
            </ul>
            <ul className="Comments">
              <h2>Comments</h2>
              {comments
                ? comments.map((comment) => {
                    return (
                      <li key={comment.comment_id}>
                        <div>
                          <h3>{comment.author}</h3>
                          <p>{comment.body}</p>
                          <p>Votes: {comment.votes}</p>
                        </div>
                      </li>
                    );
                  })
                : null}
            </ul>
          </div>
        )}
      </main>
    );
  }
};
export default SingleArticle;
