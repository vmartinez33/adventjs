
/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
    while (packages.includes("(")) {
        packages = packages.replace(/\(([^()]+)\)/g, (_, content) => content.split('').reverse().join(''));
    }
    return packages;
}

const packages = fixPackages('a(cb)de')
console.log(packages)  // ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis

const packages2 = fixPackages('a(bc(def)g)h')
console.log(packages2)  // ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

const packages3 = fixPackages('abc(def(gh)i)jk')
console.log(packages3)  // ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

const packages4 = fixPackages('a(b(c))e')
console.log(packages4)  // ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"
