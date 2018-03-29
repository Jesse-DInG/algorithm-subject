/**
 * 两大数相加，考虑正负数
 * @param {*} a
 * @param {*} b
 */
function bigNumAdd (a, b) {
  let aFlag = a.charAt(0) !== '-' ? 1 : -1
  let bFlag = b.charAt(0) !== '-' ? 1 : -1
  let aLength = aFlag > 0 ? a.length : a.length - 1
  let bLength = bFlag > 0 ? b.length : b.length - 1
  let result = []
  let resultFlag
  let maxLength = Math.max(aLength, bLength)
  let num1 = a.substr(aFlag > 0 ? 0 : 1).split('')
  let num2 = b.substr(bFlag > 0 ? 0 : 1).split('')

  if (aFlag * bFlag < 0) {
    // 减法
    const maxNum = getMaxNum(maxLength)
    let bigger
    let smaller

    for (let i = 0; i < maxLength; i++) {
      let compare1 = toNum(num1[maxLength - i - 1])
      let compare2 = toNum(num2[maxLength - i - 1])
      if (compare1 !== compare2) {
        if (compare1 > compare2) {
          bigger = num1
          smaller = num2
          resultFlag = aFlag
        } else {
          bigger = num2
          smaller = num1
          resultFlag = bFlag
        }
        break
      }
    }
    result = sub(maxNum, smaller)
    result = add(result, bigger)
    result = add(result, [1])
    result[0] = resultFlag > 0 ? '' : '-'
  } else {
    result = add(num1, num2)
    result.unshift(aFlag > 0 ? '' : '-')
  }
  return result.join('')
  // get n length max num
  function getMaxNum (length) {
    const num = []
    for (let i = 0; i < length; i++) {
      num.push(9)
    }
    return num
  }
  function add (n1, n2) {
    let length = Math.max(n1.length, n2.length)
    const l1 = n1.length
    const l2 = n2.length
    const result = new Array(length)

    let flag = 0
    for (let i = 0; i < length; i++) {
      let sum = toNum(n1[l1 - i - 1]) + toNum(n2[l2 - i - 1]) + flag
      if (sum > 9) {
        sum %= 10
        flag = 1
      } else {
        flag = 0
      }
      result[length - i - 1] = sum
    }
    if (flag)result.unshift(1)
    return result
  }
  function sub (minuend, subtrahend) {
    const result = []
    const length = minuend.length
    for (let i = 0; i < minuend.length; i++) {
      result.push(toNum(minuend[length - i - 1]) - toNum(subtrahend[length - i - 1]))
    }
    return result
  }
  function toNum (str) {
    if (str) {
      return +str
    } else {
      return 0
    }
  }
}

console.log(bigNumAdd('-888888888888888888888888', '-98'))
console.log(bigNumAdd('-888888888888888888888888', '98'))
console.log(bigNumAdd('888888888888888888888888', '98'))
