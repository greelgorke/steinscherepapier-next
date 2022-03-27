const PATH = "/api/game";
const PATH_EXTENDED = PATH + "/extended";

export async function makeTurn(figure, extended = false) {
  const callURL = `${extended ? PATH : PATH_EXTENDED}`;
  const request = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ figure }),
  };
  return (await fetch(callURL, request)).json().catch((err) => null);
}
export async function fetchFigures(extended = false) {
  const callURL = `${extended ? PATH : PATH_EXTENDED}`;
  return (await fetch(callURL)).json().catch((err) => []);
}
