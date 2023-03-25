const assert = require('assert');
const tasks = require('../src/02-numbers-tasks');
it.optional = require('../extensions/it-optional');

describe('02-numbers-tasks', () => {
  it.optional('getRectangleArea should return a square of rectangle', () => {
    assert.equal(tasks.getRectangleArea(5, 10), 50);
    assert.equal(tasks.getRectangleArea(5, 5), 25);
  });

  it.optional('getCicleCircumference should return a circumference of cicle', () => {
    assert.equal(tasks.getCicleCircumference(5), 31.41592653589793);
    assert.equal(tasks.getCicleCircumference(3.14), 19.729201864543903);
    assert.equal(tasks.getCicleCircumference(0), 0);
  });

  it.optional('getAverage should return an average of two numbers', () => {
    assert.equal(tasks.getAverage(5, 5), 5);
    assert.equal(tasks.getAverage(10, 0), 5);
    assert.equal(tasks.getAverage(-3, 3), 0);
    assert.equal(tasks.getAverage(Number.MAX_VALUE - 2, Number.MAX_VALUE), Number.MAX_VALUE - 1);
    assert.equal(tasks.getAverage(Number.MAX_VALUE, -Number.MAX_VALUE / 2), Number.MAX_VALUE / 4);
  });

  it.optional('getLastDigit should return a last digit of the number', () => {
    assert.equal(tasks.getLastDigit(100), 0);
    assert.equal(tasks.getLastDigit(37), 7);
    assert.equal(tasks.getLastDigit(5), 5);
    assert.equal(tasks.getLastDigit(0), 0);
  });

  it.optional('parseNumberFromString should return a number from the given string representation', () => {
    assert.equal(tasks.parseNumberFromString('100'), 100);
    assert.equal(tasks.parseNumberFromString('37'), 37);
    assert.equal(tasks.parseNumberFromString('-525.5'), -525.5);
  });

  it.optional('getParallelipidedDiagonal should return a diagonal length of the rectagular parallepiped', () => {
    assert.equal(tasks.getParallelipidedDiagonal(1, 1, 1), Math.sqrt(3));
    assert.equal(tasks.getParallelipidedDiagonal(3, 3, 3), Math.sqrt(27));
    assert.equal(tasks.getParallelipidedDiagonal(1, 2, 3), Math.sqrt(14));
  });

  it.optional('isPrime should return true if specified number is prime', () => {
    assert.equal(tasks.isPrime(2), true, '2');
    assert.equal(tasks.isPrime(3), true, '3');
    assert.equal(tasks.isPrime(4), false, '4');
    assert.equal(tasks.isPrime(5), true, '5');
    assert.equal(tasks.isPrime(6), false, '6');
    assert.equal(tasks.isPrime(7), true, '7');
    assert.equal(tasks.isPrime(8), false, '8');
    assert.equal(tasks.isPrime(9), false, '9');
    assert.equal(tasks.isPrime(10), false, '10');
    assert.equal(tasks.isPrime(11), true, '11');
    assert.equal(tasks.isPrime(12), false, '12');
    assert.equal(tasks.isPrime(13), true, '13');
    assert.equal(tasks.isPrime(113), true, '113');
    assert.equal(tasks.isPrime(119), false, '119');
  });

  it.optional('toNumber should convert any value to number or return the default', () => {
    assert.equal(tasks.toNumber(null, 0), 0);
    assert.equal(tasks.toNumber('test', 0), 0);
    assert.equal(tasks.toNumber('1', 0), 1);
    assert.equal(tasks.toNumber(42, 0), 42);
    // eslint-disable-next-line no-new-wrappers
    assert.equal(tasks.toNumber(new Number(42), 0), 42);
    assert.equal(tasks.toNumber(undefined, -1), -1);
  });
});
