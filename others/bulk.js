/**
 * 木桶问题
 * 已有三个木桶,容量分别是12,8,3,其中第一个桶是满的,求如何获得6容量的水
 *
 */

class StateObj {
  constructor (path = []) {
    this.key = null
    this.path = path
  }

  static genKey (path) {
    if (path.length > 0) {
      return path[path.length - 1].join(',')
    }
    return ''
  }

  toString () {
    return `${this.key}: [${this.path.map(state => '[' + state.join(', ') + ']').join(', ')}]`
  }
}

const _stateMap = Symbol('stateMap')
const _bulks = Symbol('bulks')
const _initState = Symbol('initState')
const _target = Symbol('target')
const _walk = Symbol('walk')
const _newWalkFlag = Symbol('newWalkFlag') // flag the new path record
const MAX_WALK = 1000 // max try times
class BulkHandler {
  constructor () {
    this[_stateMap] = {}
    this[_newWalkFlag] = false
  }

  /**
   *
   * @param {Array} bulks
   * @param {Array} initState
   * @param {Number} target
   */
  exec (bulks, initState, target) {
    if (bulks) this.bulks = bulks
    if (initState) this.initState = initState
    if (target) this.target = target
    this[_stateMap] = new Map()
    const sObj = new StateObj([this.initState])
    sObj.key = StateObj.genKey(sObj.path)
    this[_stateMap].set(sObj.key, sObj)
    for (let i = 1; i <= MAX_WALK; i++) {
      const result = this[_walk](i)
      //   this.printStateMap(i)
      if (result) {
        return result
      }
      if (!this[_newWalkFlag]) break // all result is walk
    }
  }

  /**
   * print all steps
   * @param {number} length
   */
  printStateMap (length) {
    console.log('walk length:' + length + '----------------------------------------------------')
    for (const stateObj of this[_stateMap].values()) {
      console.log(stateObj.toString())
    }
  }

  [_walk] (currentLength) {
    this[_newWalkFlag] = false
    const length = this.bulks.length
    const states = Array.from(this[_stateMap].values())
    for (let sIndex = 0, sLength = states.length; sIndex < sLength; sIndex++) {
      const stateObj = states[sIndex]
      const path = stateObj.path
      const state = path[path.length - 1]
      if (path.length < currentLength) continue // 无路可走
      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
          // i为减少的桶
          // j为增加的桶
          if (i === j) continue
          if (state[i] === 0) continue
          const rest = this.bulks[j] - state[j]
          if (rest === 0) continue // 桶满了
          const newState = state.concat()
          const moveSum = Math.min(newState[i], rest)
          newState[i] -= moveSum
          newState[j] += moveSum
          const newPath = path.concat()
          newPath.push(newState)
          const newKey = StateObj.genKey(newPath)
          if (!this[_stateMap].has(newKey)) {
            this[_newWalkFlag] = true
            const sObj = new StateObj(newPath)
            sObj.key = newKey
            this[_stateMap].set(newKey, sObj)
            if (newState[i] === this.target || newState[j] === this.target) {
              return sObj
            }
          }
        }
      }
    }
    return null
  }

  get bulks () {
    return this[_bulks]
  }

  set bulks (bulks) {
    this[_bulks] = bulks
  }

  get initState () {
    return this[_initState]
  }

  set initState (initState) {
    this[_initState] = initState
  }

  get target () {
    return this[_target]
  }

  set target (target) {
    this[_target] = target
  }
}
module.exports = BulkHandler
// const bulk = new BulkHandler()
// const result = bulk.exec([12, 8, 3], [12, 0, 0], 6)
// console.log(`result: ${result}`)
// bulk.exec([12, 8, 3], [9, 3, 0], 6)
