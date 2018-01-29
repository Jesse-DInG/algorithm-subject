const kmpSearch = require('./kmp')
const expect = require('chai').expect

describe('kmp test', function () {
  it('should be true', function () {
    expect(kmpSearch('ABCBABCAB', 'ABCAB')).to.be.equal(4)
  })
})
