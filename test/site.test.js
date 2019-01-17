/* global describe, it, expect */

var expect = require('chai').expect;
var factory = require('../app/site');


describe('site', function() {
  
  it('should export factory function', function() {
    expect(factory).to.be.a('function');
  });
  
  it('should be annotated', function() {
    expect(factory['@implements']).to.equal('http://i.kerouacjs.org/Site');
    expect(factory['@singleton']).to.be.undefined;
  });
  
  describe('create', function() {
    var site = factory();
  
    it('should construct site', function() {
      expect(site.handle).to.be.a('function');
      expect(site.handle.length).to.equal(2);
    });
  });
  
});
