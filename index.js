'use strict';

var fs = require('fs');
var path = require('path');
var util = require('./lib/util');

exports = module.exports = requireDir;

function requireDir(dir, opt){
  var caller = util.callsites(requireDir, 1)[0].getFileName();
  var dirname = path.resolve(
    path.dirname(caller),
    util.type(dir).string || '.'
  );

  opt = util.type(opt || dir).plainObject || {};
  var re = util.type(opt.test).regexp;

  try {
    var ls = fs.readdirSync(dirname);
  } catch(err){ throw err; }

  var hash = {};

  ls.forEach(function(file){
    if(/^[.]/.test(file) && !opt.dot){ return; }
    if(re && !re.test(file)){ return; }

    var pathname = path.join(dirname, file);
    if(pathname === caller){ return; }

    var ext = path.extname(file);
    var key = util.camelCase(path.basename(file, ext));
    if(hash[key]){ key += ext.slice(1); }

    // is it a file/module?
    try {
      hash[key] = require(pathname);
    } catch(err){
      // then is a folder
      if(opt.recursive){
        hash[key] = requireDir(pathname, opt);
      }
    }
  });

  return hash;
}
