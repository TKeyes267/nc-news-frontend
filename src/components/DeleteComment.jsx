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
    <div className="bg-alto flex flex-row justify-between ">
      <div></div>
      <button
        className="text-tar px-4 py-2 hover:bg-red hover:text-plaster font-poppins"
        onClick={deleteCommentByID}
      >
        Delete Comment
      </button>
    </div>
  );
};
export default DeleteComment;
