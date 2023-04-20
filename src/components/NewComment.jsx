import { useState } from "react";
import { postComment } from "../Api";

const NewComment = ({ setComments, article_id }) => {
  const [newCommentBody, setNewCommentBody] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const postedComment = {
      body: newCommentBody,
      author: "cooljmessy",
      votes: 0,
    };

    setComments((currentComments) => {
      return [postedComment, ...currentComments];
    });
    postComment(article_id, newCommentBody, "cooljmessy").catch((err) => {
      console.log(err);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newComment"> </label>
        <textarea
          id="newComment"
          value={newCommentBody}
          onChange={(event) => setNewCommentBody(event.target.value)}
          rows={6}
          placeholder="Enter your comment here"
          required
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default NewComment;
