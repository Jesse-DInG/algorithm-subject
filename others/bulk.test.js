const BulkHandler = require('./bulk')
const expect = require('chai').expect
describe('bulk', function () {
  it('test walk path', function () {
    const instance = new BulkHandler()
    const result = instance.exec([12, 8, 3], [12, 0, 0], 6)
    expect(result.key).to.equal('6,3,3')
  })
})
