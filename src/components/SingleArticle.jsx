import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, getComments } from "../Api";
import ArticleVote from "./ArticleVote";
import moment from "moment";
import NewComment from "./NewComment";
import DeleteComment from "./DeleteComment";
import Comments from "./Comments";

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
      <div className="bg-concrete pb-16">
        <div className="bg-alto flex justify-center lg:px-40 px-4 ">
          {isLoading ? (
            <h2 className="font-poppins mx-8 px-8 text-3xl">Loading...</h2>
          ) : (
            <div className="bg-alto pb-8 flex-col justify-center ">
              <div className="bg-concrete p-4 justify-center mt-8 flex md:flex-row flex-col">
                <div className="mr-8">
                  <h2 className="text-2xl md:text-6xl text-alto font-poppins mb-8 md:leading-[5rem]">
                    {article.title}
                  </h2>
                  <h3 className="text-alto font-poppins">
                    By {article.author}
                  </h3>
                  <p className="text-alto font-poppins pb-4">
                    {moment(article.created_at).format("MM/DD/YYYY")}
                  </p>
                </div>
                <img
                  className="object-contain lg:w-[800px]"
                  src={article.article_img_url}
                  alt="article image"
                />
              </div>
              <p className="text-tar bg-plaster p-4 text:md lg:text-2xl font-poppins antialiased leading-loose border-2 border-concrete">
                {article.body}
              </p>

              <ArticleVote
                votes={article.votes}
                article_id={article.article_id}
                error={error}
              />
            </div>
          )}
        </div>
        <Comments
          comments={comments}
          setComments={setComments}
          article_id={article_id}
          setSuccessMsg={setSuccessMsg}
          successMsg={successMsg}
        />
      </div>
    );
  }
};
export default SingleArticle;
