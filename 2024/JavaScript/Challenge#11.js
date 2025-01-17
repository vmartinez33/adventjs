
/**
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename.
 */
function decodeFilename(filename) {
    filename = filename.split('_').slice(1).join('_');
    filename = filename.split('.').slice(0, -1).join('.');
    return filename;
}


const filename = decodeFilename('2023122512345678_sleighDesign.png.grinchwa')
console.log(filename)  // ➞ "sleighDesign.png"

const filename2 = decodeFilename('42_chimney_dimensions.pdf.hack2023')
console.log(filename2)  // ➞ "chimney_dimensions.pdf"

const filename3 = decodeFilename('987654321_elf-roster.csv.tempfile')
console.log(filename3)  // ➞ "elf-roster.csv"
