import { useEffect, useState } from "react";

import "./App.css";

type Move = "rock" | "paper" | "scissors";
const MOVES: readonly Move[] = ["rock", "paper", "scissors"];
const getRandomMove = () => {
  const randomIndex = Math.floor(Math.random() * MOVES.length);
  return MOVES[randomIndex];
};
function App() {
  const [computerMove, setComputerMove] = useState<Move>("rock");

  useEffect(() => {
    setComputerMove(getRandomMove());
  }, []);

  return <div>Computer move: {computerMove}</div>;
}

export default App;
