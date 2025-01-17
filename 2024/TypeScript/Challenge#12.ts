
function calculatePrice(ornaments: string): number | undefined {
    const values = new Map<string, number>([
        ['*', 1],
        ['o', 5],
        ['^', 10],
        ['#', 50],
        ['@', 100],
    ]);

    let price: number = 0;
    for (let i = 0; i < ornaments.length; i++) {
        const ornament = ornaments[i];
        const next_ornament = i < ornaments.length - 1 ? ornaments[i + 1] : null;

        const value = values.get(ornament);
        const next_value = next_ornament ? values.get(next_ornament) : null;
        
        if (!value || (next_ornament && !next_value)) return undefined;

        if (next_value && value < next_value) {
            price -= value;
        } else {
            price += value;
        }
    }

    return price;
}


console.log(calculatePrice('***'))  // 3   (1 + 1 + 1)
console.log(calculatePrice('*o'))   // 4   (5 - 1)
console.log(calculatePrice('o*'))   // 6   (5 + 1)
console.log(calculatePrice('*o*'))  // 5  (-1 + 5 + 1) 
console.log(calculatePrice('**o*')) // 6  (1 - 1 + 5 + 1) 
console.log(calculatePrice('o***')) // 8   (5 + 3)
console.log(calculatePrice('*o@'))  // 94  (-5 - 1 + 100)
console.log(calculatePrice('*#'))   // 49  (-1 + 50)
console.log(calculatePrice('@@@'))  // 300 (100 + 100 + 100)
console.log(calculatePrice('#@'))   // 50  (-50 + 100)
console.log(calculatePrice('#@Z'))  // undefined (Z is unknown)
