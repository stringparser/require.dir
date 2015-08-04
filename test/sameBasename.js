'use strict';

var requireDir = require('../');

it('should add lowerCase extension if basename existed', function(){
  requireDir('./folder/sameBasename').should.be.eql({
    a: 'a',
    ajson: {a: 'a'},
    module: 'module',
    modulejs: 'module'
  });
});
