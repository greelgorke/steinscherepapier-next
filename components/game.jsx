import ModeSelect from "./modeSelect";
import TurnMaker from "./turnMaker";
import TurnResult from "./turnResult";

export default function Game({
  standardVersion,
  possibleFigures,
  turnResult,
  toggleVersion,
  onFigureClicked,
}) {
  return (
    <section className="container w-fit text-center mt-4 flex flex-col justify-between border-2 rounded shadow">
      <div className="m-4">
        <ModeSelect
          standardSelected={standardVersion}
          toggleVersion={toggleVersion}
        />
      </div>
      <div className="m-4">
        <TurnMaker
          possibleFigures={possibleFigures}
          onFigureClicked={onFigureClicked}
        />
      </div>
      <div className="m-4">
        <TurnResult result={turnResult} />
      </div>
    </section>
  );
}
