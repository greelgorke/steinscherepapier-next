import { actions, initialState, reducer } from "../gameState";

describe("gameState", () => {
  let state;

  beforeEach(() => {
    state = initialState;
  });

  it("should react to setVersion", () => {
    state.standardVersion = true;
    state.possibleFigures = ["foo"];
    const result = reducer(state, actions.setVersion(false));
    expect(result).toEqual({
      ...initialState,
      standardVersion: false,
      possibleFigures: [],
    });
  });
  it("should react to setTurnResult", () => {
    const result = reducer(state, actions.setTurnResult("Test"));
    expect(result).toEqual({
      ...initialState,
      turnResult: "Test",
    });
  });
  it("should react to setFigures", () => {
    const result = reducer(state, actions.setFigures(["test"]));
    expect(result).toEqual({
      ...initialState,
      possibleFigures: ["test"],
    });
  });
});
