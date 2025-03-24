import { useEffect, useState } from "react";

import "./App.css";

type Move = "rock" | "paper" | "scissors";
const MOVES: readonly Move[] = ["rock", "paper", "scissors"];
function App() {
  const [computerMove, setComputerMove] = useState<Move>("rock");
  const getRandomMove = () => {
    const randomIndex = Math.floor(Math.random() * MOVES.length);
    return MOVES[randomIndex];
  };

  useEffect(() => {
    setComputerMove(getRandomMove());
  }, []);

  return <div>Computer move: {computerMove}</div>;
}

export default App;
