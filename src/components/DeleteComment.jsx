import { deleteComment } from "../Api";

const DeleteComment = ({
  comment_id,
  setComments,
  setSuccessMsg,
  successMsg,
}) => {
  const deleteCommentByID = () => {
    deleteComment(comment_id)
      .then(() => {
        setComments((oldComments) => {
          const newComments = oldComments.filter((comment) => {
            return comment.comment_id !== comment_id;
          });
          return newComments;
        });
        setSuccessMsg("Comment deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <button className="button-subCom floatButton" onClick={deleteCommentByID}>
        Delete
      </button>
    </>
  );
};
export default DeleteComment;
