import { patchVotes } from "../Api";
import { useState } from "react";

const ArticleVote = ({ votes, article_id, error }) => {
  const [voteChange, setVoteChange] = useState(0);

  const voteClickAdd = () => {
    const value = 1;
    setVoteChange((currentVotes) => currentVotes + 1);
    patchVotes(article_id, value).catch((error) => {
      setVoteChange(0);
    });
  };
  const voteClickSub = () => {
    const value = -1;
    setVoteChange((currentVotes) => currentVotes - 1);
    patchVotes(article_id, value).catch((error) => {
      setVoteChange(0);
    });
  };

  if (error) {
    return <h2>Something went wrong...</h2>;
  }
  return (
    <div className="VotingButton">
      <button
        onClick={(event) => voteClickAdd(event.target, voteChange)}
        name="add"
      >
        +
      </button>
      <p>Votes: {votes + voteChange}</p>
      <button
        onClick={(event) => voteClickSub(event.target, voteChange)}
        name="subtract"
      >
        -
      </button>
    </div>
  );
};

export default ArticleVote;
