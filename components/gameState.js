export const actions = {
  setVersion: (standardVersion) => ({ type: "setVersion", standardVersion }),
  setTurnResult: (turnResult) => ({ type: "setTurnResult", turnResult }),
  setFigures: (figures) => ({ type: "setFigures", figures }),
};

export const initialState = {
  standardVersion: true,
  turnResult: null,
  possibleFigures: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "setVersion":
      return {
        ...state,
        standardVersion: action.standardVersion,
        possibleFigures: [],
      };
    case "setTurnResult":
      return { ...state, turnResult: action.turnResult };
    case "setFigures":
      return { ...state, possibleFigures: action.figures };
  }
};
