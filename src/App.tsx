import { useState } from "react";

import "./App.css";

const MOVES = ["rock", "paper", "scissors"] as const;
type Move = (typeof MOVES)[number];

type GameResult = {
	wins: number;
	losses: number;
	ties: number;
};
const getRandomMove = () => {
	const randomIndex = Math.floor(Math.random() * MOVES.length);
	return MOVES[randomIndex];
};
function App() {
	const [computerMove, setComputerMove] = useState<Move>(getRandomMove());
	const [playerMove, setPlayerMove] = useState<Move | null>(null);
	const [winnerText, setWinnerText] = useState("");
	const [gameResult, setGameResult] = useState<GameResult>({
		wins: 0,
		losses: 0,
		ties: 0,
	});

	const resetGame = () => {
		setComputerMove(getRandomMove());
		setPlayerMove(null);
	};

	const handleMove = (move: Move) => {
		setPlayerMove(move);
		const result = determineWinner(move, computerMove);
		if (result === "tie") {
			setGameResult({ ...gameResult, ties: gameResult.ties + 1 });
			setWinnerText("It's a tie!");
		} else if (result === "player") {
			setGameResult({ ...gameResult, wins: gameResult.wins + 1 });
			setWinnerText("You Won!");
		} else {
			setGameResult({ ...gameResult, losses: gameResult.losses + 1 });
			setWinnerText("You Lost!");
		}
	};

	const determineWinner = (move: Move, computerMove: Move) => {
		if (move === computerMove) return "tie";
		if (
			(move === "rock" && computerMove === "scissors") ||
			(move === "paper" && computerMove === "rock") ||
			(move === "scissors" && computerMove === "paper")
		)
			return "player";
		return "computer";
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
					onClick={() => handleMove("rock")}
				>
					Rock
				</button>
				<button
					disabled={playerMove !== null}
					className="bg-gray-300 py-2 px-4 rounded-md min-w-24 hover:bg-slate-400"
					onClick={() => handleMove("paper")}
				>
					Paper
				</button>
				<button
					disabled={playerMove !== null}
					className="bg-gray-300 py-2 px-4 rounded-md min-w-24 hover:bg-slate-400"
					onClick={() => handleMove("scissors")}
				>
					Scissors
				</button>
			</div>
			{playerMove !== null && (
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
						<p className="font-bold mx-auto text-xl my-2"> {winnerText}</p>
					</div>
					<div className="flex justify-normal space-x-5 my-5">
						<p>Game Results:</p>
						<p>Wins: {gameResult.wins}</p>
						<p>Losses: {gameResult.losses}</p>
						<p>Ties: {gameResult.ties}</p>
					</div>
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
