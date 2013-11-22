/* global describe, it, expect, bjs */
/* jshint strict: false */
describe('bjs.string.slug', function () {
  it('should slug a swedish address', function () {
    var s1 = bjs.string.slug('tëstvögen 12#  ^^ü hej');
    expect(s1).toEqual('testvogen-12-u-hej');
  });
  it('should use specified delimiter', function () {
    var s1 = bjs.string.slug('tëstvögen 12#  ^^ü hej', {delimiter: '|'});
    expect(s1).toEqual('testvogen|12|u|hej');
  });
  it('should slug an url', function () {
    var s1 = bjs.string.slug('http://www.booli.se/testvägen/bromœlla', {url: true});
    expect(s1).toEqual('http://www.booli.se/testvagen/brom-lla');
  });
  it('should preserve specified chars', function () {
    var s1 = bjs.string.slug('http://www.booli.se/nacka,värmdö/76,20/', {url: true});
    expect(s1).toEqual('http://www.booli.se/nacka-varmdo/76-20/');
    var s2 = bjs.string.slug('http://www.booli.se/nacka,värmdö/76,20/', {url: true, preserve: [',']});
    expect(s2).toEqual('http://www.booli.se/nacka,varmdo/76,20/');
  });
});
