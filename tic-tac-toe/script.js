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

const player1 = Player("Nico", "X");
const player2 = Player("Ivancho", "O");

console.log(Gameboard.getBoard());
console.log(player1);
console.log(player2);
