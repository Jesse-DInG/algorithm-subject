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
  let count = numRows * 2 - 2
  let colCount = numRows - 1
  if (numRows === 1) {
    // special
    count = colCount = 1
  }
  let totalCol = (~~(s.length / count)) * colCount
  let restCount = s.length % count
  if (restCount > 0) {
    // left col
    totalCol++
  }
  if (restCount > numRows) {
    // rest col count
    totalCol += restCount - numRows
  }
  let result = []
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < totalCol; j++) {
      let col = ~~(j / colCount)
      let subCol = j % colCount
      if (subCol === 0) {
        result.push(s.charAt(col * count + i))
      } else {
        if (i + subCol === colCount) {
          result.push(s.charAt(col * count + numRows + subCol - 1))
        }
      }
    }
  }
  return result.join('')
}

module.exports = convert
