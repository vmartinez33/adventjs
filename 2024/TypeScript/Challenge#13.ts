
function isRobotBack(moves: string): true | [number, number] {
    let i: number = 0;
    let double: boolean = false;
    const movesMade = new Set<string>();
    const position: [number, number] = [0, 0];
    const movesList: string[] = moves.split('');

    const normalMoves: Map<string, [number, number]> = new Map([
        ['R', [1, 0]],
        ['L', [-1, 0]],
        ['U', [0, 1]],
        ['D', [0, -1]]
    ]);

    const invertedMoves: Map<string, string> = new Map([
        ['R', 'L'],
        ['L', 'R'],
        ['U', 'D'],
        ['D', 'U']
    ]);

    while (i < movesList.length) {
        const move = movesList[i];

        if (normalMoves.has(move)) {
            const multiplier = double ? 2 : 1;
            const [x, y] = normalMoves.get(move)!;
            position[0] += x * multiplier;
            position[1] += y * multiplier;
            double = false;
        } else if (move === '*') {
            double = true;
        } else if (move === '!') {
            movesList[i + 1] = invertedMoves.get(movesList[i + 1])!;
        } else if (move === '?') {
            if (movesMade.has(movesList[i + 1])) {
                i += 1;
            }
        }

        movesMade.add(move);
        i += 1;
    }

    return position[0] === 0 && position[1] === 0 ? true : position;
}


console.log(isRobotBack('R'))     // [1, 0]
console.log(isRobotBack('RL'))    // true
console.log(isRobotBack('RLUD'))  // true
console.log(isRobotBack('*RU'))   // [2, 1]
console.log(isRobotBack('R*U'))   // [1, 2]
console.log(isRobotBack('LLL!R')) // [-4, 0]
console.log(isRobotBack('R?R'))   // [1, 0]
console.log(isRobotBack('U?D'))   // true
console.log(isRobotBack('R!L'))   // [2,0]
console.log(isRobotBack('U!D'))   // [0,2]
console.log(isRobotBack('R?L'))   // true
console.log(isRobotBack('U?U'))   // [0,1]
console.log(isRobotBack('*U?U'))  // [0,2]
console.log(isRobotBack('U?D?U')) // true

// Step-by-step examples:
console.log(isRobotBack('R!U?U')) // [1,0]
// 'R'  -> moves to the right 
// '!U' -> inverts and becomes 'D'
// '?U' -> moves upwards, because the 'U' movement hasn't been done yet

console.log(isRobotBack('UU!U?D')) // [0,1]
// 'U'  -> moves upwards
// 'U'  -> moves upwards
// '!U' -> inverts and becomes 'D'
// '?D' -> does not move, since the 'D' movement has already been done
