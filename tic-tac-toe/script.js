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

    const player1 = Player("Nico", "X");
    const player2 = Player("Ivancho", "O");
    let currentPlayer = player1;
    let gameOver = false;

    const switchPlayer = () => {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
    };

    const playRound = (index) => {
        if (gameOver) return;

        const board = Gameboard.getBoard();

        if (board[index] !== "") return;

        Gameboard.setCell(index, currentPlayer.marker);

        if (checkWinner()) {
            console.log(`${currentPlayer.name} wins!`);
            gameOver = true;
            return;
        }

        if (checkTie()) {
            console.log("It's a tie!");
            gameOver = true;
            return;
        }

        switchPlayer();
    };

    const checkWinner = () => {
        const board = Gameboard.getBoard();

        const winningCombos = [
            [0, 1, 2], // row 1
            [3, 4, 5], // row 2
            [6, 7, 8], // row 3
            [0, 3, 6], // col 1
            [1, 4, 7], // col 2
            [2, 5, 8], // col 3
            [0, 4, 8], // diagonal \
            [2, 4, 6]  // diagonal /
        ];

        return winningCombos.some(combo => {
            const [a, b, c] = combo;

            return (
                board[a] !== "" &&
                board[a] === board[b] &&
                board[a] === board[c]
                );
        });
    };


    const checkTie = () => {
        const board = Gameboard.getBoard();
        return board.every(cell => cell !== "");
    };


    const resetGame = () => {
    };

    return { playRound, resetGame };

})();
