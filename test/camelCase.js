'use strict';

var requireDir = require('../');

it('should camelCase folder exports', function(){
  requireDir('./folder/camelCase').should.be.eql({
    fileA: {},
    fileB: 'b'
  });
});
