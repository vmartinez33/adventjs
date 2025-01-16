
/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
    const flatBoard = board.join('');
    const pos = flatBoard.indexOf('@');
    const cols = board[0].length;

    const row = Math.floor(pos / cols);
    const col = pos % cols;

    const movMap = {
        U: [-1, 0],
        D: [1, 0],
        L: [0, -1],
        R: [0, 1]
    };

    const [rowMov, colMov] = movMap[mov];
    const newRow = row + rowMov;
    const newCol = col + colMov;

    if (newRow < 0 || newRow >= board.length || newCol < 0 || newCol >= cols) {
        return 'crash';
    }

    const nextPosition = board[newRow][newCol];
    switch (nextPosition) {
        case 'o':
            return 'crash';
        case '*':
            return 'eat';
        default:
            return 'none';
    }
}


const board = [
    '·····',
    '*····',
    '@····',
    'o····',
    'o····'
]

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Because the train moves up and finds a magical fruit

console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// The train moves down and the head crashes into itself

console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// The train moves to the left and crashes into the wall

console.log(moveTrain(board, 'R'))
// ➞ 'none'
// The train moves to the right and there is empty space on the right
