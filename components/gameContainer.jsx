import { useEffect, useReducer } from "react";
import Game from "./game";
import { fetchFigures, makeTurn } from "./gameAPIclient";
import { actions, initialState, reducer } from "./gameState";

export default function GameContainer() {
  const [{ standardVersion, possibleFigures, turnResult }, dispatch] =
    useReducer(reducer, initialState);

  useEffect(() => {
    if (possibleFigures.length === 0) {
      fetchFigures(standardVersion).then((figures) =>
        dispatch(actions.setFigures(figures.possibleFigures))
      );
    }
  });

  const toggleVersion = () => {
    dispatch(actions.setVersion(!standardVersion));
  };

  const onFigureClicked = async (figure) => {
    const turnResult = await makeTurn(figure, standardVersion);
    dispatch(actions.setTurnResult(turnResult));
  };

  return (
    <Game
      standardVersion={standardVersion}
      possibleFigures={possibleFigures}
      turnResult={turnResult}
      toggleVersion={toggleVersion}
      onFigureClicked={onFigureClicked}
    />
  );
}
