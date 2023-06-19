import { useState } from "react";
import { postComment } from "../Api";

const NewComment = ({ setComments, article_id, successMsg, setSuccessMsg }) => {
  const [newCommentBody, setNewCommentBody] = useState("");

  const [setErrorMsg] = useState("");
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
      <form className="commentBox" onSubmit={handleSubmit}>
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
      </form>
      <p>{successMsg ? successMsg : null}</p>
    </div>
  );
};

export default NewComment;
