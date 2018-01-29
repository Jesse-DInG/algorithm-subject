
const map = []
function connectedGraph (num) {
  const rest = new Array(num)
  for (let i = 0; i < num; i++) {
    rest[i] = i + 1
  }
  getRest([], rest)
  map.forEach(path => console.log(path))
  console.log(map.length)
}

function getRest (arr, rest) {
  for (let i = 0, length = rest.length; i < length; i++) {
    const copyArr = arr.concat()
    const copyRest = rest.concat()
    copyArr.push(rest[i])
    copyRest.splice(i, 1)

    if (copyRest.length > 0) {
      getRest(copyArr, copyRest)
    } else {
      map.push(copyArr.join(','))
    //   map.set(copyArr, copyRest)
    }
  }
}

connectedGraph(4)
