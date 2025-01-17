
/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number} The value of the register A
 */
function compile (instructions) {
    let i = 0;
    const registers = new Map();
    
    while (i < instructions.length) {
        const instruction = instructions[i].split(" ");
        const func = instruction[0];

        switch (func) {
            case 'MOV':
                const x = instruction[1];
                const y = instruction[2];
                if (isNaN(Number(x))) {
                    registers.set(y, registers.get(x) || 0);
                } else {
                    registers.set(y, Number(x));
                }
                break;
            case 'INC':
                const registerINC = instruction[1];
                registers.set(registerINC, (registers.get(registerINC) || 0) + 1);
                break;
            case 'DEC':
                const registerDEC = instruction[1];
                registers.set(registerDEC, (registers.get(registerDEC) || 0) - 1);
                break;
            case 'JMP':
                const register = instruction[1];
                const index = Number(instruction[2]);
                if ((registers.get(register) || 0) == 0) {
                    i = index;
                    continue;
                }
        }

        i++;
    }

    return registers.get('A');
}


const instructions = [
    'MOV -1 C', // copies -1 to register 'C',
    'INC C', // increments the value of register 'C'
    'JMP C 1', // jumps to the instruction at index 1 if 'C' is 0
    'MOV C A', // copies register 'C' to register 'A',
    'INC A' // increments the value of register 'A'
]

console.log(compile(instructions)) // -> 2

/**
 Step-by-step execution:
0: MOV -1 C -> The register C receives the value -1
1: INC C    -> The register C becomes 0
2: JMP C 1  -> C is 0, jumps to the instruction at index 1
1: INC C    -> The register C becomes 1
2: JMP C 1  -> C is 1, the instruction is ignored
3: MOV C A  -> Copies register C to A. Now A is 1
4: INC A    -> The register A becomes 2
*/

console.log(compile([
    "MOV 5 B",
    "DEC B",
    "MOV B A",
    "INC A"
])) // -> 5

console.log(compile([
    "MOV 2 X",
    "DEC X",
    "DEC X",
    "JMP X 1",
    "MOV X A"
])) // -> -2
