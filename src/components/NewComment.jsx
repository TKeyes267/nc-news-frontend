import { useState } from "react";
import { postComment } from "../Api";

const NewComment = ({ setComments, article_id }) => {
  const [newCommentBody, setNewCommentBody] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setButtonDisabled(true);

    const postedComment = {
      body: newCommentBody,
      author: "cooljmessy",
      votes: 0,
    };

    setComments((currentComments) => {
      setButtonDisabled(false);
      return [postedComment, ...currentComments];
    });
    postComment(article_id, newCommentBody, "cooljmessy").catch((err) => {
      console.log(err);
      setErrorMsg("Something went wrong, please try again!");
    });
    setSuccessMsg("Comment posted!");
    setNewCommentBody("");
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
        <button type="submit" disabled={buttonDisabled}>
          Submit
        </button>
        <p>{successMsg ? successMsg : null}</p>
      </form>
    </div>
  );
};

export default NewComment;
