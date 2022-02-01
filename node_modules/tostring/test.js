
/**
 * Module dependencies
 */

var to = require('./')
var assert = require('assert');
var s = to('hex', {newline: false})

s.on('data', function (chunk) {
  assert('3132330a' == chunk)
});

s.write('123\n');
