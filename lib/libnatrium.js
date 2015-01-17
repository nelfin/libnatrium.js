/**
 * libnatrium.js
 *
 * A port of the libsodium cryptography library
 *
 * @author Andrew Haigh <hello@nelf.in>
 */
var libnatrium = (function() {
  'use strict';
  var salt = {
    encoding: {},
    exception: {
      invalid: function(message) {
        return {
          toString: function() { return 'INVALID: ' + message; },
          message: message
        }
      }
    },
    hash: {},
    'public': {},
    secret: {},
    signing: {},
    util: {}
  };
  return salt;
}());

if (typeof module !== 'undefined' && module.exports) {
  module.exports = libnatrium;
}
