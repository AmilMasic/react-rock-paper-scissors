import { useState } from "react";

import "./App.css";

const MOVES = ["rock", "paper", "scissors"] as const;
type Move = (typeof MOVES)[number];

const GAMERESULT = ["tie", "player", "computer"] as const;
type GameResult = (typeof GAMERESULT)[number];
const getRandomMove = () => {
	const randomIndex = Math.floor(Math.random() * MOVES.length);
	return MOVES[randomIndex];
};
function App() {
	const [computerMove, setComputerMove] = useState<Move>(getRandomMove());
	const [playerMove, setPlayerMove] = useState<Move | null>(null);
	const [gameResult, setGameResult] = useState<GameResult | null>(null);
	const [winningMessage, setWinningMessage] = useState("");

	const resetGame = () => {
		setComputerMove(getRandomMove());
		setPlayerMove(null);
		setGameResult(null);
		setWinningMessage("");
	};

	const checkWinner = (move: Move, computerMove: Move) => {
		setPlayerMove(move);
		if (move === computerMove) {
			setGameResult("tie");
			setWinningMessage("It's a tie!");
		} else if (
			(move === "rock" && computerMove === "scissors") ||
			(move === "paper" && computerMove === "rock") ||
			(move === "scissors" && computerMove === "paper")
		) {
			setGameResult("player");
			setWinningMessage("You chose... Well!");
		} else {
			setGameResult("computer");
			setWinningMessage("You chose... Poorly!");
		}
	};

	return (
		<div className="bg-gray-200 md:w-1/2 w-full mx-auto h-screen flex flex-col align-items-center *:mx-auto ">
			<div className=" py-5 font-bold text-2xl">ROCK PAPER SCISSOR</div>
			<p className="py-5 font-semibold">
				Hello Player, Choose your move. Choose wisely!
			</p>
			<div className="space-x-5 my-5 border border-1 border-gray-300 p-8 rounded-md">
				<button
					disabled={playerMove !== null}
					className=" bg-gray-300 py-2 px-4 rounded-md min-w-24 hover:bg-slate-400"
					onClick={() => checkWinner("rock", computerMove)}
				>
					Rock
				</button>
				<button
					disabled={playerMove !== null}
					className="bg-gray-300 py-2 px-4 rounded-md min-w-24 hover:bg-slate-400"
					onClick={() => checkWinner("paper", computerMove)}
				>
					Paper
				</button>
				<button
					disabled={playerMove !== null}
					className="bg-gray-300 py-2 px-4 rounded-md min-w-24 hover:bg-slate-400"
					onClick={() => checkWinner("scissors", computerMove)}
				>
					Scissors
				</button>
			</div>
			{gameResult && (
				<>
					<div className="flex flex-col my-5">
						<div>
							Your move:
							<span className="font-bold ml-2">{playerMove}</span>
						</div>
						<div>
							Computer move:
							<span className="font-bold ml-2">{computerMove}</span>
						</div>
					</div>
					<h3
						className={`font-bold text-2xl mb-5 ${
							gameResult === "tie"
								? "text-gray-500"
								: gameResult === "player"
								? "text-green-500"
								: "text-red-500"
						}`}
					>
						{winningMessage}
					</h3>
					<button
						className="bg-gray-300 py-2 px-4 rounded-md min-w-24 hover:bg-slate-400"
						onClick={resetGame}
					>
						Reset
					</button>
				</>
			)}
		</div>
	);
}

export default App;
