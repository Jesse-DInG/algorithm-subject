function kmpGenerate (str) {
  const length = str.length
  const next = new Array(length)
  next[0] = -1
  let i = 0 // p索引
  let j = -1 // 子串索引
  while (i < length - 1) {
    if (j < 0 || str.charAt(i) === str.charAt(j)) {
      i++
      j++
      next[i] = j
    } else {
      j = next[j]
    }
  }
  return next
}

function kmpSearch (str, p) {
  const length = str.length
  const pLength = p.length
  let index = 0
  let start = 0
  const next = kmpGenerate(p)
  while (index < length) {
    if (start < 0 || str.charAt(index) === p.charAt(start)) {
      index++
      start++
      if (pLength === start) {
        return index - start
      }
    } else {
      start = next[start]
    }
  }
  return -1
}
module.exports = kmpSearch
// let str = 'ABCBABCAB'
// let p = 'ABCAB'
// let next = kmpGenerate(p)
// console.log(str)
// console.log(p)
// console.log(next.join())
// console.log(kmpSearch(str, p))
