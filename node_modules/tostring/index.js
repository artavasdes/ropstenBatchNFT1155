
/**
 * Module dependencies
 */

var through = require('through')

/**
 * Returns a stream that
 * transforms a buffer to
 * a string of a specified
 * type.
 *
 * @api public
 * @param {String} type - [hex, utf8, ascii, binary, base64, ...]
 * @param {Object} opts - optional
 * @return {Stream}
 */

module.exports = to;
function to (type, opts) {
  opts = opts || {};
  return through(function (chunk) {
    var buf = null;
    var tmp = Buffer(chunk.length);
    var len = tmp.write(String(chunk), 0);
    // hackery
    switch (type) {
      case 'utf8':
      case 'utf-8':
        buf = Buffer(JSON.parse('"'+ tmp.toString(type, 0, len) +'"'));
        break;
      default: buf = Buffer(tmp);
    }
    this.push(buf.toString(type));
    opts.newline && this.push('\n');
  });
}
