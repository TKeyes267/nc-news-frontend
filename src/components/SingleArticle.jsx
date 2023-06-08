import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, getComments, deleteComment } from "../Api";
import ArticleVote from "./ArticleVote";
import moment from "moment";
import NewComment from "./NewComment";
import DeleteComment from "./DeleteComment";

const SingleArticle = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState("");

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
              <br></br>
              <br></br>
              <ArticleVote
                votes={article.votes}
                article_id={article.article_id}
                error={error}
              />
            </ul>
            <ul className="Comments">
              <h2>Comments</h2>
              <br></br>
              <NewComment
                setComments={setComments}
                article_id={article_id}
                setSuccessMsg={setSuccessMsg}
                successMsg={successMsg}
              />
              <br></br>
              {comments
                ? comments.map((comment) => {
                    return (
                      <li key={comment.comment_id}>
                        <div>
                          <h3>{comment.author}</h3>
                          <p>{comment.body}</p>
                          <p>Votes: {comment.votes}</p>
                        </div>
                        <DeleteComment
                          comment_id={comment.comment_id}
                          comments={comments}
                          setComments={setComments}
                          setSuccessMsg={setSuccessMsg}
                          successMsg={successMsg}
                        />
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
