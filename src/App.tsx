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

  return <div>Computer move: {computerMove}</div>;
}

export default App;
