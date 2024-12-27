function organizeInventory(inventory) {
    const organizedInventory = {};

    for (const { name, quantity, category } of inventory) {
        if (!organizedInventory[category]) {
            organizedInventory[category] = {};
        }

        if (!organizedInventory[category][name]) {
            organizedInventory[category][name] = quantity;
        } else {
            organizedInventory[category][name] += quantity;
        }
    }

    return organizedInventory;
}


const inventory = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
];
const result = organizeInventory(inventory);
console.log(result);

// Expected result:
// {
//   toys: {
//     doll: 5,
//     car: 5
//   },
//   sports: {
//     ball: 2,
//     racket: 4
//   }

const inventory2 = [
    { name: 'book', quantity: 10, category: 'education' },
    { name: 'book', quantity: 5, category: 'education' },
    { name: 'paint', quantity: 3, category: 'art' }
];
const result2 = organizeInventory(inventory2);
console.log(result2);
// Expected result:
// {
//   education: {
//     book: 15
//   },
//   art: {
//     paint: 3
//   }
// }
