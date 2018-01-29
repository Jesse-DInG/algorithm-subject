/**
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const cList = s.split('')
  let dic = new Map()
  const cLength = cList.length
  let maxLength = 0
  function seek (start, seekStart) {
    let index = seekStart
    while (index < cLength) {
      let c = cList[index]
      if (dic.has(c)) {
        const rIndex = dic.get(c)
        const newStart = rIndex + 1
        for (let i = start; i < rIndex; i++) {
          dic.delete(cList[i])
        }
        dic.set(c, index)
        seek(newStart, index + 1)
        break
      } else {
        dic.set(c, index)
        index++
      }
    }
    maxLength = Math.max(maxLength, index - start)
  }
  seek(0, 0)
  return maxLength
}
module.exports = lengthOfLongestSubstring
