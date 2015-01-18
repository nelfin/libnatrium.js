describe('A secret box', function() {
  var s = libnatrium.secret;
  it('should be implemented', function() {
    expect(s.secretbox).toBeDefined();
  });
  it('should accept only valid key lengths', function() {
    expect(function() {
      s.secretbox(new Array(s.KEY_SIZE + 1));
    }).toThrow();
  });
  xit('should preserve plaintext over a round-trip', function() {
    var box = s.secretbox(new Array(s.KEY_SIZE));
    var p = [1, 2, 3, 4, 5];
    expect(box.decrypt(box.encrypt(p, new Array(s.NONCE_SIZE)))).toEqual(p);
  });
});
