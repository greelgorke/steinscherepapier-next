import { render, screen } from "@testing-library/react";
import Game from "../game";

jest.mock(
  "../modeSelect",
  () =>
    function ModeSelect() {
      return <div role="modeSelect"></div>;
    }
);
jest.mock(
  "../turnMaker",
  () =>
    function TurnMaker() {
      return <div role="turnMaker"></div>;
    }
);
jest.mock(
  "../turnResult",
  () =>
    function TurnResult() {
      return <div role="turnResult"></div>;
    }
);

jest.mock("../gameAPIclient");

describe("Game", () => {
  it("renders", () => {
    render(<Game />);

    expect(screen.getByRole("modeSelect")).toBeDefined();
    expect(screen.getByRole("turnMaker")).toBeDefined();
    expect(screen.getByRole("turnResult")).toBeDefined();
  });
});
