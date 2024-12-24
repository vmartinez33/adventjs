
function createFrame(names: string[]): string {
    const largest_name: string = names.reduce((prev, curr) => prev.length > curr.length ? prev : curr, "");
    const largest_length: number = largest_name.length;

    let frame: string = '*'.repeat(largest_length + 4) + "\n";
    for (const name of names) {
        frame += "* " + name.padEnd(largest_length) + " *\n";
    }
    frame += '*'.repeat(largest_length + 4);

    return frame;
}


const frame1: string = createFrame(['midu', 'madeval', 'educalvolpz']);
console.log(frame1);
// Expected result:
/*
***************
* midu        *
* madeval     *
* educalvolpz *
***************
*/

const frame2: string = createFrame(['midu']);
console.log(frame2);
// Expected result:
/*
********
* midu *
********
*/

const frame3: string = createFrame(['a', 'bb', 'ccc']);
console.log(frame3);
// Expected result:
/*
*******
* a   *
* bb  *
* ccc *
*******
*/
