const assert = require('chai').assert;
const funcs = require('../src/project-3');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-2 Functions', () => {
    describe('makeCat', () => {
        it('should be a function', () => {
          const makeCat = funcs.makeCat;
          assert.typeOf(makeCat, 'function');
        });
        it('should return 5 when passed "Jenny" and 5 in the argument', () => {
          const makeCat = funcs.makeCat;
          assert.equal(makeCat('Jenny', 5).age, 5);
        });
        it('should return "Meow!" string', () => {
          const makeCat = funcs.makeCat;
          assert.equal(makeCat('Jenny', 5).meow(), 'Meow!');
        });
    });

    /* ------------------------------------------------------- */
    describe('addProperty() should be a function', () => {
        const addProperty = funcs.addProperty;
        assert.typeOf(addProperty, 'function');
    });
    if('addProperty(cat, fur) should return true', () => {
        const addProperty = funcs.addProperty;
        assert.equal(addProperty('cat', 'fur').fur, 'null');
    });
});