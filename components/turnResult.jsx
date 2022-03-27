import { PropTypes } from "prop-types";
import { figureEmoji, outcomes } from "./gameUtils";

export default function TurnResult({ result }) {
  return (
    <div className="min-h-[7rem]">
      <h3 className="font-bold mb-2">Last Result:</h3>
      {result != null ? (
        <>
          You did {figureEmoji[result.yourTurn]} <br />I did{" "}
          {figureEmoji[result.myTurn]} <br />
          {outcomes[result.outcome]}
          <br />
        </>
      ) : (
        <>No result available yet</>
      )}
    </div>
  );
}

TurnResult.propTypes = {
  result: PropTypes.shape({
    yourTurn: PropTypes.string,
    myTurn: PropTypes.string,
    outcome: PropTypes.string,
  }),
};
