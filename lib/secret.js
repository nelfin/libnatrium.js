/**
 * libnatrium.secret
 *
 * Authenticated secret-key encryption
 *
 */
var libnatrium = (function (salt) {
  var secret = salt.secret = salt.secret || {};
  secret.KEY_SIZE = 8;
  secret.NONCE_SIZE = 4;
  secret.MAC_SIZE = 4;
  secret.secretbox = function(key) {
    if (key.length !== secret.KEY_SIZE) {
      throw new salt.exception.invalid(
        'secret: key must be exactly ' + secret.KEY_SIZE + ' bytes'
      );
    }
    var box = {
      _key: key
    };
    box.encrypt = function(plaintext, nonce) {
      if (nonce.length !== secret.NONCE_SIZE) {
        throw new salt.exception.invalid(
          'secret: nonce must be exactly ' + secret.NONCE_SIZE + ' bytes'
        );
      }
      throw new salt.exception.unimplemented('secret: box.encrypt');
    };
    box.decrypt = function(ciphertext, nonce) {
      if (typeof nonce === 'undefined') {
        // Assume we were given nonce and ciphertext combined
        nonce = ciphertext.slice(0, secret.NONCE_SIZE);
        ciphertext = ciphertext.slice(secret.NONCE_SIZE, ciphertext.length);
      }
      if (nonce.length !== secret.NONCE_SIZE) {
        throw new salt.exception.invalid(
          'secret: nonce must be exactly ' + secret.NONCE_SIZE + ' bytes'
        );
      }
      throw new salt.exception.unimplemented('secret: box.decrypt');
    };
    return box;
  };
  return salt;
}(libnatrium || {}));
