import { PropTypes } from "prop-types";
import { figureEmoji } from "./gameUtils";

export default function TurnMaker({ possibleFigures, onFigureClicked }) {
  return (
    <div className="flex justify-center space-x-3">
      {possibleFigures.map((figure) => (
        <button
          key={figure}
          onClick={() => onFigureClicked(figure)}
          className="rounded-2xl border-solid border-2 border-orange-50 w-8"
        >
          {figureEmoji[figure]}
        </button>
      ))}
    </div>
  );
}

TurnMaker.propTypes = {
  possibleFigures: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFigureClicked: PropTypes.func.isRequired,
};
