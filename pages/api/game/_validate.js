export default function validate(turn, figures) {
  if (turn == null) {
    return { message: "No body supplied" };
  }
  if (turn.figure == null) {
    return { message: "No figure supplied" };
  }
  if (!figures.includes(turn.figure)) {
    return { message: "Illegal figure supplied" };
  }
}
