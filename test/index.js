'use strict';

require('should');

var fs = require('fs');
var path = require('path');
var pack = require('../package');

describe(pack.name, function(){
  fs.readdirSync(__dirname).forEach(function(pathname){
    var ext = path.extname(pathname);
    if(!ext || pathname === 'index.js'){ return; }
    describe(path.basename(pathname, ext), function(){
      require('./' + pathname);
    });
  });
});
