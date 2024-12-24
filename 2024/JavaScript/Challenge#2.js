
function createFrame(names) {
    const largest_name = names.reduce((prev, curr) => prev.length > curr.length ? prev : curr, "");
    const largest_length = largest_name.length;

    let frame = '*'.repeat(largest_length + 4) + "\n";
    for (const name of names) {
        frame += "* " + name.padEnd(largest_length) + " *\n";
    }
    frame += '*'.repeat(largest_length + 4);

    return frame;
}


const frame1 = createFrame(['midu', 'madeval', 'educalvolpz']);
console.log(frame1);
// Expected result:
/*
***************
* midu        *
* madeval     *
* educalvolpz *
***************
*/

const frame2 = createFrame(['midu']);
console.log(frame2);
// Expected result:
/*
********
* midu *
********
*/

const frame3 = createFrame(['a', 'bb', 'ccc']);
console.log(frame3);
// Expected result:
/*
*******
* a   *
* bb  *
* ccc *
*******
*/
