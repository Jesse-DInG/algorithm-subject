/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let list = (x + '').split('')
  if (x < 0) {
    list.shift()
  }
  let num = +((x < 0 ? '-' : '') + list.reverse().join(''))
  if (num > 2147483647 || num < -2147483648) {
    num = 0
  }
  return num
}
