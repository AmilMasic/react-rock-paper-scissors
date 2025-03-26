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

	return (
		<div className="bg-gray-200 md:w-1/2 w-full mx-auto h-screen flex flex-col align-items-center *:mx-auto ">
			<div className=" py-5 font-bold text-2xl  ">ROCK PAPER SCISSOR</div>
			<p className="py-5 font-semibold">
				Hello Player, Choose your move. Choose wisely!
			</p>
			<div className="space-x-5 my-5 border border-1 border-gray-300 p-8 rounded-md">
				<button
					className=" bg-gray-300 py-2 px-4 rounded-md min-w-24 hover:bg-slate-400"
					onClick={() => setPlayerMove("rock")}
				>
					Rock
				</button>
				<button
					className="bg-gray-300 py-2 px-4 rounded-md min-w-24 hover:bg-slate-400"
					onClick={() => setPlayerMove("paper")}
				>
					Paper
				</button>
				<button
					className="bg-gray-300 py-2 px-4 rounded-md min-w-24 hover:bg-slate-400"
					onClick={() => setPlayerMove("scissors")}
				>
					Scissors
				</button>
			</div>
			{playerMove && (
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
