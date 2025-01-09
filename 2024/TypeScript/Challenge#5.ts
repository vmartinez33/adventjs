type Shoe = {
    type: 'I' | 'R'
    size: number
}

// function organizeShoes(shoes: Shoe[]): number[] {
//     const shoesBySize = new Map<number, Map<string, number>>();

//     for (const shoe of shoes) {
//         if (!shoesBySize.has(shoe.size)) {
//             shoesBySize.set(shoe.size, new Map<string, number>());
//         }

//         const typeCount = shoesBySize.get(shoe.size);
//         typeCount?.set(shoe.type, (typeCount?.get(shoe.type) || 0) + 1);
//     }

//     const availableShoes = new Array<number>();
//     for (const [size, types] of shoesBySize) {
//         const I: number = types.get('I') || 0;
//         const R: number = types.get('R') || 0;
//         availableShoes.push(...Array(Math.min(I, R)).fill(size));
//     }

//     return availableShoes;
// }

function organizeShoes(shoes: Shoe[]): number[] {
    const availableShoes: number[] = [];
    const shoesBySize = new Map<number, Map<string, number>>();

    for (const shoe of shoes) {
        const { size, type } = shoe;
        const oppositeType = type === "I" ? "R" : "I";

        if (!shoesBySize.has(size)) {
            shoesBySize.set(size, new Map<string, number>());
        }

        const typeCount = shoesBySize.get(size)!;
        
        if (typeCount.get(oppositeType)! > 0) {
            availableShoes.push(size);
            typeCount.set(oppositeType, typeCount.get(oppositeType)! - 1);
        } else {
            typeCount.set(type, (typeCount.get(type) || 0) + 1);
        }
    }

    return availableShoes;
}


const shoes: Shoe[] = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
]
const pairs = organizeShoes(shoes)
console.log(pairs)  // [38, 42]

const shoes2: Shoe[] = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
]
const pairs2 = organizeShoes(shoes2)
console.log(pairs2)  // [38, 38]

const shoes3: Shoe[] = [
    { type: 'I', size: 38 },
    { type: 'R', size: 36 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 43 }
]
const pairs3 = organizeShoes(shoes3)
console.log(pairs3)  // []
