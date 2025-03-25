import { useState } from "react";

import "./App.css";

const MOVES = ["rock", "paper", "scissors"] as const;
type Move = (typeof MOVES)[number];
const getRandomMove = () => {
  const randomIndex = Math.floor(Math.random() * MOVES.length);
  return MOVES[randomIndex];
};
function App() {
  const [computerMove, setComputerMove] = useState<Move>(getRandomMove());
  const [playerMove, setPlayerMove] = useState<Move | null>(null);

  const resetGame = () => {
    setComputerMove(getRandomMove());
    setPlayerMove(null);
  };

  // Styles
  const buttonDivStyles = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,

    padding: 10,
  } as const;

  const buttonStyles = {
    padding: 10,
    cursor: "pointer",
  };

  const titleStyles = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 10,
  } as const;

  const resetStyles = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 10,
  } as const;

  const moveStyles = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 10,
  } as const;

  return (
    <>
      <div style={titleStyles}>ROCK PAPER SCISSOR</div>
      <p>Hello Player, Choose your move. Choose wisely!</p>
      <div style={buttonDivStyles}>
        <button style={buttonStyles} onClick={() => setPlayerMove("rock")}>
          Rock
        </button>
        <button style={buttonStyles} onClick={() => setPlayerMove("paper")}>
          Paper
        </button>
        <button style={buttonStyles} onClick={() => setPlayerMove("scissors")}>
          Scissors
        </button>
      </div>
      {playerMove && (
        <>
          <div style={moveStyles}> Computer move: {computerMove}</div>

          <div style={moveStyles}>Player move: {playerMove}</div>

          <div style={resetStyles}>
            <button style={buttonStyles} onClick={resetGame}>
              Reset
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default App;
