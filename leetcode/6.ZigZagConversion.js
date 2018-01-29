/**
The string "
" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:

string convert(string text, int nRows);
convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let isOdd = numRows % 2 === 0
  let count = isOdd ? numRows : numRows + 1

  let midRow = ~~(numRows / 2)
  let totalCol = ~~(s.length / count) + 1
  let result = []
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < totalCol; j++) {
      result.push(s.charAt(count * j + i))
      if (i === midRow && !isOdd) {
        result.push(s.charAt(count * j + numRows))
      }
    }
  }
  return result.join('')
}
// 'PAHNALIGYIRI' == 'PAHNAPLSIIGYIR'
const asseert = require('assert')
asseert.equal(convert('ABCDE', 4), 'ABCED')
asseert.equal(convert('PAYPALISHIRING', 3), 'PAHNAPLSIIGYIR')
asseert.equal(convert('ABC', 2), 'ACB')
asseert.equal(convert('ABCD', 2), 'ACBD')
