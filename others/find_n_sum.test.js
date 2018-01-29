const find_n_sum = require('./find_n_sum')
const expect = require('chai').expect
describe('find_n_sum', function () {
  it('test case', function () {
    expect(find_n_sum([5, 3, 2, 4, 6, 8], 4, 17)).to.deep.equal([5, 2, 4, 6])
  })
  it('test case', function () {
    expect(find_n_sum([5, 3, 2, 4, 6, 8], 3, 17)).to.deep.equal([5, 4, 8])
  })
  it('test case', function () {
    expect(find_n_sum([5, 3, 2, 4, 7, -5], 3, 6)).to.deep.equal([4, 7, -5])
  })
  it('test case', function () {
    expect(find_n_sum([5, 3, 2, 4, 6, -3], 3, 2)).to.deep.equal([3, 2, -3])
  })
})
