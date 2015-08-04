'use strict';

var requireDir = require('../');

it('should recurse folder exports given {recursive: true}', function(){
  requireDir('./folder/recursive', {recursive: true}).should.be.eql({
    a: 'a',
    dir: {
      b: 'b',
      module: 'module'
    }
  });
});
