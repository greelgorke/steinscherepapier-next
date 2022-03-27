import { PropTypes } from "prop-types";

export default function ModeSelect({
  standardSelected = false,
  toggleVersion,
}) {
  return (
    <label>
      Playing extended version?
      <input
        type="checkbox"
        checked={!standardSelected}
        name="version"
        onChange={toggleVersion}
        className="ml-2"
      />
    </label>
  );
}

ModeSelect.propTypes = {
  standardSelected: PropTypes.bool,
  toggleVersion: PropTypes.func.isRequired,
};
