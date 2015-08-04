'use strict';

var requireDir = require('../');

it('should exclude dot folders by default', function(){
  requireDir('./folder/regexp').should.be.eql({
    'index': 'regexp'
  });
});

it('{regexp: /\.js$/, dot: true} also returns .dotfile.js', function(){
  requireDir('./folder/regexp', {regexp: /\.js$/, dot: true}).should.be.eql({
    'index': 'regexp',
    'dotfile': ''
  });
});
