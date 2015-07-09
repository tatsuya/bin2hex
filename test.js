var assert = require('assert');
var bin2hex = require('./');

assert.equal(bin2hex('0000'), '0');
assert.equal(bin2hex('0001'), '1');
assert.equal(bin2hex('0010'), '2');
assert.equal(bin2hex('0011'), '3');
assert.equal(bin2hex('0100'), '4');
assert.equal(bin2hex('0101'), '5');
assert.equal(bin2hex('0110'), '6');
assert.equal(bin2hex('0111'), '7');
assert.equal(bin2hex('1000'), '8');
assert.equal(bin2hex('1001'), '9');
assert.equal(bin2hex('1010'), 'a');
assert.equal(bin2hex('1011'), 'b');
assert.equal(bin2hex('1100'), 'c');
assert.equal(bin2hex('1101'), 'd');
assert.equal(bin2hex('1110'), 'e');
assert.equal(bin2hex('1111'), 'f');
