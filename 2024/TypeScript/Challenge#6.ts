
function inBox(box: string[]): boolean {
    for (let i = 1; i < box.length - 1; i++) {
        if (box[i].substring(1, box[i].length - 1).includes('*')) {
            return true;
        }
    }
    return false
}


const bool = inBox([
    "###",
    "#*#",
    "###"
]) // ➞ true
console.log(bool);

const bool2 = inBox([
    "####",
    "#* #",
    "#  #",
    "####"
]) // ➞ true
console.log(bool2);

const bool3 = inBox([
    "#####",
    "#   #",
    "#  #*",
    "#####"
]) // ➞ false
console.log(bool3);

const bool4 = inBox([
    "#####",
    "#   #",
    "#   #",
    "#   #",
    "#####"
]) // ➞ false
console.log(bool4);
