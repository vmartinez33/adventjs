/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
function organizeShoes(shoes) {
    const availableShoes = [];
    const shoesBySize = new Map();

    for (const shoe of shoes) {
        const { size, type } = shoe;
        const oppositeType = type === "I" ? "R" : "I";

        if (!shoesBySize.has(size)) {
            shoesBySize.set(size, new Map());
        }

        const typeCount = shoesBySize.get(size);
        
        if (typeCount.get(oppositeType) > 0) {
            availableShoes.push(size);
            typeCount.set(oppositeType, typeCount.get(oppositeType) - 1);
        } else {
            typeCount.set(type, (typeCount.get(type) || 0) + 1);
        }
    }

    return availableShoes;
}

const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
]
const pairs = organizeShoes(shoes)
console.log(pairs)  // [38, 42]

const shoes2 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
]
const pairs2 = organizeShoes(shoes2)
console.log(pairs2)  // [38, 38]

const shoes3 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 36 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 43 }
]
const pairs3 = organizeShoes(shoes3)
console.log(pairs3)  // []
