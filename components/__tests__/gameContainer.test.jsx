import { render, waitFor } from "@testing-library/react";
import React from "react";
import rules from "../../game/gameRules";
import { fetchFigures } from "../gameAPIclient";
import GameContainer from "../gameContainer";

const mockedGamePropsSpy = jest.fn();
jest.mock(
  "../game",
  () =>
    function Game(props) {
      mockedGamePropsSpy(props);
      return <div className="game"></div>;
    }
);

jest.mock("../gameAPIclient");

describe("GameContainer", () => {
  beforeEach(() => {
    fetchFigures.mockResolvedValue({ possibleFigures: rules.figures });
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders a game", async () => {
    let result;
    await waitFor(() => {
      result = render(<GameContainer />);
    });
    expect(result.container.firstChild).not.toBeNull();
  });

  it("provides game with all props", async () => {
    await waitFor(() => {
      render(<GameContainer />);
    });

    expect(mockedGamePropsSpy).toHaveBeenCalled();
    expect(mockedGamePropsSpy.mock.calls[0][0].standardVersion).toBeDefined();
    expect(mockedGamePropsSpy.mock.calls[0][0].toggleVersion).toBeDefined();
  });

  it("toggles version", async () => {
    await waitFor(() => {
      render(<GameContainer />);
    });

    const toggleVersion =
      mockedGamePropsSpy.mock.calls[mockedGamePropsSpy.mock.calls.length - 1][0]
        .toggleVersion;
    const version =
      mockedGamePropsSpy.mock.calls[mockedGamePropsSpy.mock.calls.length - 1][0]
        .standardVersion;
    await waitFor(() => {
      toggleVersion();
    });

    expect(
      mockedGamePropsSpy.mock.calls[mockedGamePropsSpy.mock.calls.length - 1][0]
        .standardVersion
    ).not.toEqual(version);
  });
});
