const convert = require('./6.ZigZagConversion')
const expect = require('chai').expect

describe('6.ZigZagConversion', function () {
  it('should return true', function () {
    expect(convert('ABCDE', 4)).to.be.equal('ABCED')
    expect(convert('PAYPALISHIRING', 3)).to.be.equal('PAHNAPLSIIGYIR')
    expect(convert('ABC', 2)).to.be.equal('ACB')
    expect(convert('ABCD', 2)).to.be.equal('ACBD')
    expect(convert('A', 1)).to.be.equal('A')
  })
})
