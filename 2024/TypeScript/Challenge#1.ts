
function prepareGifts(gifts: number[]): number[] {
    const nonDuplicatedGifts = [...new Set(gifts)];
    const sortedGifts = [...nonDuplicatedGifts].sort((a, b) => a - b);
    return sortedGifts;
}


const gifts1: number[] = [3, 1, 2, 3, 4, 2, 5];
const preparedGifts1: number[] = prepareGifts(gifts1);
console.log(preparedGifts1); // [1, 2, 3, 4, 5]

const gifts2: number[] = [6, 5, 5, 5, 5];
const preparedGifts2: number[] = prepareGifts(gifts2);
console.log(preparedGifts2); // [5, 6]

const gifts3: number[] = [];
const preparedGifts3: number[] = prepareGifts(gifts3);
console.log(preparedGifts3); // []
// There are no gifts, the list remains empty
