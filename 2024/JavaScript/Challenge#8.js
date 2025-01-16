
/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
    let race = '';
    const nIndices = indices.length;

    for (let i = 1; i <= nIndices; i++) {
        let snow = '~'.repeat(length);
        const index = indices[i - 1];
        
        if (index > 0) {
            const snowArr = snow.split('');
            snowArr[index] = 'r';
            snow = snowArr.join('');
        } else if (index < 0) {
            const snowArr = snow.split('');
            snowArr[length + index] = 'r';
            snow = snowArr.join('');
        }

        const shiftSpace = ' '.repeat(nIndices - i);
        race += `${shiftSpace}${snow} /${i}`;

        if (i !== nIndices) {
            race += '\n';
        }
    }

    return race;
}


const race1 = drawRace([0, 5, -3], 10);
console.log(race1);
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

const race2 = drawRace([2, -1, 0, 5], 8);
console.log(race2);
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

const race3 = drawRace([3, 7, -2], 12);
console.log(race3);
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~r~~~~ /2
~~~~~~~~~~r~ /3
*/
