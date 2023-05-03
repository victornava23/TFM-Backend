var assert = require('assert');
describe('Basic Mocha String Test', function () {
  it('should return number of characters is 6', function () {
    assert.equal("Helloo".length, 6);
  });
});