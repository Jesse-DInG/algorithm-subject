/*
 * @Author: jesse_ding 
 * @Date: 2017-10-11 23:39:52 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2017-10-12 09:40:37
 */

/**
 * 时间复杂度O(n^2)
 * 空间复杂度O(n)
 * @param {Array} data 
 * @param {*} n 
 * @param {*} sum 
 */
function getToal (data, n, sum) {
    var stack = []
    var dic = [] // 记录当前数组的索引位置
    for (var i = 0; i < n; i++) {
        stack.push(data[i])
        dic[i] = i
    }

    while (true) {
        var index = n - 1
        // console.log('dic')
        // console.log(index)
        // console.log(dic)
        if (getSum(stack) === sum) {
            return stack
        }

        if (dic[index] < data.length - 1) {
            dic[index]++
            stack[index] = data[dic[index]]
        } else {
            do {
                index--
                if (index < 0) {
                    return null
                }
                dic[index]++
            } while (dic[index] > data.length - (n - index))
        }
        // reset stack list
        for (var i = index; i < n; i++) {
            if (i > index) {
                dic[i] = dic[i - 1] + 1
            }
            stack[i] = data[dic[i]]
        }
    }
}
/**
 * 求和
 * @param {Array} stack 
 */
function getSum (stack) {
    var sum = 0
    for (let i = 0; i < stack.length; i++) {
        sum += stack[i]
    }
    // console.log(stack)
    return sum
}

function test (data, n, sum) {
    console.log(`data:[${data.join()}], n:${n}, sum:${sum}, result:[${getToal(data, n, sum)}]`)
}
test([5, 3, 2, 4, 6, 8], 4, 17)
test([5, 3, 2, 4, 6, 8], 3, 17)
test([5, 3, 2, 4, 7, -5], 3, 6)
test([5, 3, 2, 4, 6, -3], 3, 2)
