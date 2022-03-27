# Stein Schere Papier or Rock Paper Scissors with Next.js

Frontend in `components`:

- `gameContainer` could be a HOC. responsible for setting up data bindings with state
- `game` Root for the visual components. Sets up the general Layout of the Game App (not the page, this is in the pages/index.jsx)
- `gameUtils` contains some mappings
- `gameState` contains the reducer and actions. A hook-ready replacement for Redux
- `modeSelect`, `turnMaker` and `turnResult` are view components for the game controls

Styling is very basic, with TailwindCss.

Tests are only examples for how some things would be tested.
