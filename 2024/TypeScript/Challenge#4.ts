
function createXmasTree(height: number, ornament: string): string {
    const width = 2 * height - 1;
    let tree = '';
    
    for (let i = 1; i <= height; i++) {
        const ornamentSize = 2 * i - 1;
        const totalPadding = Math.max(0, width - ornamentSize);
        const halfPadding = Math.floor(totalPadding / 2);
        
        const leftPadding = '_'.repeat(halfPadding);
        const rightPadding = '_'.repeat(totalPadding - halfPadding);

        tree += leftPadding + ornament.repeat(ornamentSize) + rightPadding + '\n';
    }
    
    const lengthPadStart = width / 2 + 1;
    tree += '#'.padStart(lengthPadStart, '_').padEnd(width, '_') + '\n';
    tree += '#'.padStart(lengthPadStart, '_').padEnd(width, '_');
    
    return tree
}


const tree = createXmasTree(5, '*')
console.log(tree)
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/

const tree2 = createXmasTree(3, '+')
console.log(tree2)
/*
__+__
_+++_
+++++
__#__
__#__
*/

const tree3 = createXmasTree(6, '@')
console.log(tree3)
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/
