import gameEngine from '../../../game/gameEngine';
import validate from './_validate';

export default function handler(req, res) {
  if (req.method === "GET") {
    /* GET game input options listing. */
    res.send({ possibleFigures: gameEngine.figures });
  } else  if (req.method === "POST") {
      const turn = req.body;
      const validationResult = validate(turn, gameEngine.figures);

      if (validationResult != null) {
        return res.status(400).json(validationResult);
      }

      const result = gameEngine(turn.figure);

      res.json({
        yourTurn: result.humanInput,
        myTurn: result.generatedInput,
        outcome: result.outcome,
      });
  } else {
    res.status(500).send('Unsupported Method')
  }
}