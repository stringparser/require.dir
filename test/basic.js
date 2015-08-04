'use strict';

var requireDir = require('../');

it('should return folder exports', function(){
  requireDir('./folder/basic').should.be.eql({
    a: {},
    b: 'b',
    dir: 'dir'
  });
});
