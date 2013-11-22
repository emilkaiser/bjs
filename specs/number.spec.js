/* global describe, it, expect, bjs */
/* jshint strict: false */
describe('bjs.number.pad', function () {
  it('should pad correctly', function () {
    var r1 = bjs.number.pad(123, 3);
    expect(r1).toEqual('123');
    var r2 = bjs.number.pad(123, 6);
    expect(r2).toEqual('000123');
    var r3 = bjs.number.pad(123, 6, 3);
    expect(r3).toEqual('333123');
  });
});
describe('bjs.number.round', function () {
  it('should round correctly', function () {
    var r1 = bjs.number.round(0.123, 2);
    expect(r1).toEqual(0.12);
    var r2 = bjs.number.round(0.1230, 3);
    expect(r2).toEqual(0.123);
    var r3 = bjs.number.round(0.123, 5);
    expect(r3).toEqual(0.123);
    var r4 = bjs.number.round(0.123, 0);
    expect(r4).toEqual(0);
    var r5 = bjs.number.round(1600, -3);
    expect(r5).toEqual(2000);
    var r6 = bjs.number.round(1223, -3);
    expect(r6).toEqual(1000);
  });
});
describe('bjs.number.format', function () {
  it ('ints', function () {
    var r1 = bjs.number.format(100);
    expect(r1).toEqual('100');
    var r2 = bjs.number.format(1000);
    expect(r2).toEqual('1 000');
    var r3 = bjs.number.format(10000);
    expect(r3).toEqual('10 000');
    var r4 = bjs.number.format(1000000000000);
    expect(r4).toEqual('1 000 000 000 000');
    var r5 = bjs.number.format(1000, 2);
    expect(r5).toEqual('1 000');
  });
  it ('floats', function () {
    var r1 = bjs.number.format(100.23, {decimals: 2, decimal: '.'});
    expect(r1).toEqual('100.23');
    var r2 = bjs.number.format(100.235, {decimals: 2});
    expect(r2).toEqual('100,24');
    var r3 = bjs.number.format(1000.234, {decimals: 2});
    expect(r3).toEqual('1 000,23');
    var r4 = bjs.number.format(10000.2, {decimals: 2});
    expect(r4).toEqual('10 000,2');
    var r5 = bjs.number.format(1000000000000.23, {decimals: 2, thousand: '_'});
    expect(r5).toEqual('1_000_000_000_000,23');
  });
});
describe('bjs.number.random', function () {
  it('should produce random results', function () {
    var r1 = bjs.number.random(5);
    var r2 = bjs.number.random(5);
    expect(r1).not.toEqual(r2);
  });
});
