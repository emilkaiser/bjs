/* global describe, it, expect, $ */
/* jshint strict: false */
describe('jquery.parseparams', function () {
  it('should parse correctly', function () {
    var r1 = $.parseParams('hej=da');
    expect(r1).toEqual({hej: 'da'});
    var r2 = $.parseParams('hej=da&ha=bra');
    expect(r2).toEqual({hej: 'da', ha: 'bra'});
    var r3 = $.parseParams('hej=da&ha=bra&ha=battre');
    expect(r3).toEqual({hej: 'da', ha: 'battre'});
    var r4 = $.parseParams('hej=da&ha=bra+battre');
    expect(r4).toEqual({hej: 'da', ha: 'bra battre'});
    var r5 = $.parseParams('hej=da&ha=bra,battre');
    expect(r5).toEqual({hej: 'da', ha: 'bra,battre'});
  });
});
