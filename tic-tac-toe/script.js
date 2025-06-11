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
    };

    const checkTie = () => {
    };

    const resetGame = () => {
    };

    return { playRound, resetGame };
    
})();
