function bigNumAdd(a,b){
    let aFlag = a.charAt(0) !== '-'?1:-1
    let bFlag = b.charAt(0) !== '-'?1:-1
    let aLength = aFlag>0?a.length:a.length-1
    let bLength = bFlag>0?b.length:b.length-1
    let result = []
    let implus = 0
    for(let i = 0,length=Math.max(aLength,bLength);i<length;i++){
        let aVal = 0
        let bVal = 0
        if(a.length-i-1>=0)aVal = +a.charAt(a.length-i-1)*aFlag
        if(b.length-i-1>=0)bVal = +b.charAt(b.length-i-1)*bFlag
        let num = aVal+bVal + implus
        if(num > 9){
            implus = 1
            num%=10
        }else if(num < 0){
            implus = -1
            num=-num
        }
        result.push(num)
    }
    if(implus>0)result.push('1')
    if(implus<0)result.push('-')
    return result.reverse().join('')
}

console.log(bigNumAdd('8','-99'))
return
let count = 10000000
function test(a){
    
    let now = Date.now()
    let temp
    for(let i = 0;i<count;i++){
        temp = a.charAt(i%10)
    }
    console.log('charAt:' + (Date.now()-now))

    var b = new Array(count)
    now = Date.now()
    for(let i = 0;i<count;i++){
        temp = b[i]
    }
    console.log('Array:' + (Date.now()-now))
}

let a = []
for(let i = 0;i<count;i++){
    a.push(i%10)
}

test(a.join(''))
