'use strict';

var requireDir = require('../');

it('{test: /\.js$/} returns no .dotfile.js', function(){
  requireDir('./folder/regexp', {test: /\.js$/}).should.be.eql({
    'index': 'regexp'
  });
});

it('{test: /\.js$/, dot: true} also gives .dotfile.js', function(){
  requireDir('./folder/regexp', {test: /\.js$/, dot: true}).should.be.eql({
    'index': 'regexp',
    'dotfile': ''
  });
});
