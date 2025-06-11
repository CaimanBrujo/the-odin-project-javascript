const Gameboard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];

    const getBoard = () => board;

    const setCell = (index, marker) => {
    if (board[index] === "") board[index] = marker;
    };

    const resetBoard = () => {
    for (let i = 0; i < board.length; i++) {
        board[i] = "";
        }
    };

    return { getBoard, setCell, resetBoard };
})();

const Player = (name, marker) => {
    return { name, marker };
};

const GameController = (() => {
	let player1, player2;
	let currentPlayer;
	let gameOver = false;

	const setPlayers = (p1, p2) => {
		player1 = p1;
		player2 = p2;
		currentPlayer = player1;
		gameOver = false;
	};

	const switchPlayer = () => {
		currentPlayer = currentPlayer === player1 ? player2 : player1;
	};

	const playRound = (index) => {
		if (gameOver || Gameboard.getBoard()[index] !== "") return;

		Gameboard.setCell(index, currentPlayer.marker);

		if (checkWinner()) {
			return `${currentPlayer.name} wins!`;
		}

		if (checkTie()) {
			return "It's a tie!";
		}

		switchPlayer();
		return `Turn: ${currentPlayer.name}`;
	};

	const checkWinner = () => {
		const board = Gameboard.getBoard();
		const winningCombos = [
			[0, 1, 2], [3, 4, 5], [6, 7, 8],
			[0, 3, 6], [1, 4, 7], [2, 5, 8],
			[0, 4, 8], [2, 4, 6]
		];
		return winningCombos.some(([a, b, c]) =>
			board[a] !== "" && board[a] === board[b] && board[a] === board[c]
		);
	};

	const checkTie = () => {
		return Gameboard.getBoard().every(cell => cell !== "");
	};

	const resetGame = () => {
		Gameboard.resetBoard();
		currentPlayer = player1;
		gameOver = false;
	};

	const getCurrentPlayer = () => currentPlayer;
	const endGame = () => { gameOver = true; };

	return { playRound, resetGame, setPlayers, getCurrentPlayer, endGame };
})();

const DisplayController = (() => {
	const container = document.querySelector(".tictactoe-container");
	const statusText = document.querySelector("#game-status");
	const restartBtn = document.querySelector("#restart-game");
	const startBtn = document.querySelector("#start-game");
	const input1 = document.querySelector("#player1-name");
	const input2 = document.querySelector("#player2-name");

	const render = () => {
		container.innerHTML = "";
		const board = Gameboard.getBoard();
		board.forEach((cell, index) => {
			const cellDiv = document.createElement("div");
			cellDiv.classList.add("cell");
			cellDiv.textContent = cell;
			cellDiv.style.userSelect = "none";
			cellDiv.style.width = "80px";
			cellDiv.style.height = "80px";
			cellDiv.style.border = "1px solid white";
			cellDiv.style.display = "flex";
			cellDiv.style.alignItems = "center";
			cellDiv.style.justifyContent = "center";
			cellDiv.style.fontSize = "2rem";
			cellDiv.style.cursor = "pointer";

			cellDiv.addEventListener("click", () => {
				const result = GameController.playRound(index);
				render();

				if (result) {
					statusText.textContent = result;
					if (result.includes("wins") || result.includes("tie")) {
						GameController.endGame();
					}
				}
			});

			container.appendChild(cellDiv);
		});
	};

	startBtn.addEventListener("click", () => {
		const name1 = input1.value.trim() || "Player 1";
		const name2 = input2.value.trim() || "Player 2";

		const p1 = Player(name1, "X");
		const p2 = Player(name2, "O");

		GameController.setPlayers(p1, p2);
		Gameboard.resetBoard();
		render();
		statusText.textContent = `Turn: ${p1.name}`;
	});

	restartBtn.addEventListener("click", () => {
		GameController.resetGame();
		render();
		statusText.textContent = `Turn: ${GameController.getCurrentPlayer().name}`;
	});

	render();
})();



