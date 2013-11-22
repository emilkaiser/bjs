/* global describe, it, expect, bjs */
/* jshint strict: false */
describe('bjs.string.ucFirst', function () {
  it('should capitalize first letter', function () {
    var r1 = bjs.string.ucFirst('a');
    expect(r1).toEqual('A');
    var r2 = bjs.string.ucFirst('A');
    expect(r2).toEqual('A');
    var r3 = bjs.string.ucFirst('alabama');
    expect(r3).toEqual('Alabama');
    var r4 = bjs.string.ucFirst('aLabamA');
    expect(r4).toEqual('ALabamA');
    var r5 = bjs.string.ucFirst('0');
    expect(r5).toEqual('0');
    var r6 = bjs.string.ucFirst(0);
    expect(r6).toEqual('0');
  });
});
/* global describe, it, expect, bjs */
/* jshint strict: false */
describe('bjs.string.random', function () {
  it('should produce random results', function () {
    var r1 = bjs.string.random(5);
    var r2 = bjs.string.random(5);
    expect(r1).not.toEqual(r2);
  });
});
/* global describe, it, expect, bjs */
/* jshint strict: false */
describe('bjs.string.hash', function () {
  it('should produce same result', function () {
    var r1 = bjs.string.hash('hej');
    var r2 = bjs.string.hash('hej');
    expect(r1).toEqual(r2);
    var r3 = bjs.string.hash('hej');
    var r4 = bjs.string.hash('heja');
    expect(r3).not.toEqual(r4);
  });
});
