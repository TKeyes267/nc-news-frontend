import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, getComments } from "../Api";
import ArticleVote from "./ArticleVote";
import moment from "moment";
import NewComment from "./NewComment";
import DeleteComment from "./DeleteComment";

const SingleArticle = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [error] = useState(null);
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
    return (
      <h2 className="font-poppins m-8 p-8 text-3xl">Something went wrong...</h2>
    );
  } else {
    return (
      <main className="bg-plaster flex justify-center w-screen h-screen">
        {isLoading ? (
          <h2 className="font-poppins m-8 p-8 text-3xl">Loading...</h2>
        ) : (
          <div className="bg-alto justify-center mb-8">
            <div className="bg-concrete p-4 justify-center mb-8">
              <h2 className="pb-4 text-xl text-plaster font-poppins">
                {article.title}
              </h2>
            </div>
            <img
              className="ArticleImg"
              src={article.article_img_url}
              alt="article cover"
            />
            <ul className="Article">
              <div className="ArticleSubHead">
                <h3>By {article.author}</h3>
                <p>{moment(article.created_at).format("MMMM Do YYYY")}</p>
              </div>
              <p className="articleBody">{article.body}</p>
              <ArticleVote
                votes={article.votes}
                article_id={article.article_id}
                error={error}
              />
            </ul>
            <ul className="Comments">
              <h2 className="CommentHeader">Comments</h2>
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
                          <h3 className="commentAuthor">{comment.author}</h3>
                          <p>{comment.body}</p>
                          <p>Votes: {comment.votes}</p>
                        </div>
                        <br></br>
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
