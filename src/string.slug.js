/**
 * https://gist.github.com/sgmurphy/3095196
 */
(function (root) {
  'use strict';
  if (!root.bjs) {
    root.bjs = {};
  }
  if (!root.bjs.string) {
    throw new Error('bjs.string missing');
  }

  var indexOf = function (array, value) {
    if (array.indexOf) {
      return array.indexOf(value);
    } else if (root._ && root._.indexOf) {
      return root._.indexOf(array, value);
    } else if (root.jQuery) {
      return root.jQuery.inArray(value, array);
    } else {
      throw new Error('Missing Array.indexOf or equivalent');
    }
  };

  root.bjs.string.slug = function (s, opt) {
    var str = String(s);

    var options = {
      delimiter: opt && opt.delimiter ? opt.delimiter : '-',
      isUrl: opt && opt.url ? true : false,
      preserve: opt && opt.preserve ? opt.preserve : [],
    };

    var map = {
      'À': 'A',
      'Á': 'A',
      'Â': 'A',
      'Ã': 'A',
      'Ä': 'A',
      'Å': 'A',
      'Æ': 'AE',
      'Ç': 'C',
      'È': 'E',
      'É': 'E',
      'Ê': 'E',
      'Ë': 'E',
      'Ì': 'I',
      'Í': 'I',
      'Î': 'I',
      'Ï': 'I',
      'Ð': 'D',
      'Ñ': 'N',
      'Ò': 'O',
      'Ó': 'O',
      'Ô': 'O',
      'Õ': 'O',
      'Ö': 'O',
      'Ő': 'O',
      'Ø': 'O',
      'Ù': 'U',
      'Ú': 'U',
      'Û': 'U',
      'Ü': 'U',
      'Ű': 'U',
      'Ý': 'Y',
      'Þ': 'TH',
      'ß': 'ss',
      'à': 'a',
      'á': 'a',
      'â': 'a',
      'ã': 'a',
      'ä': 'a',
      'å': 'a',
      'æ': 'ae',
      'ç': 'c',
      'è': 'e',
      'é': 'e',
      'ê': 'e',
      'ë': 'e',
      'ì': 'i',
      'í': 'i',
      'î': 'i',
      'ï': 'i',
      'ð': 'd',
      'ñ': 'n',
      'ò': 'o',
      'ó': 'o',
      'ô': 'o',
      'õ': 'o',
      'ö': 'o',
      'ő': 'o',
      'ø': 'o',
      'ù': 'u',
      'ú': 'u',
      'û': 'u',
      'ü': 'u',
      'ű': 'u',
      'ý': 'y',
      'þ': 'th',
      'ÿ': 'y'
    };

    for (var k in map) {
      if (indexOf(options.preserve, k) === -1) {
        str = str.replace(new RegExp(k, 'g'), map[k]);
      }
    }

    // Replace non-alphanumeric with delimiter
    var regexp = '^a-z0-9' + options.preserve.join('');
    if (options.isUrl) {
      regexp += '\/:.';
    }
    str = str.replace(new RegExp('[' + regexp + ']+', 'ig'), options.delimiter);
    // and duplicate delimiters
    str = str.replace(new RegExp('[' + options.delimiter + ']{2,}', 'g'), options.delimiter);
    // and delimiter from ends
    str = str.replace(new RegExp('(^' + options.delimiter + '|' + options.delimiter + '$)', 'g'), '');

    return str.toLowerCase();
  };

}(this));
