'use strict';

var fs = require('fs');
var path = require('path');
var util = require('./lib/util');

exports = module.exports = requireDir;

function requireDir(dirname, opt){
  opt = util.type(opt || dirname).plainObject || {};
  var caller = util.callsites(requireDir)[0].getFileName();
  opt.dirname = path.resolve(
    path.dirname(caller),
    util.type(opt.dirname || dirname).string || '.'
  );

  try {
    var ls = fs.readdirSync(opt.dirname);
  } catch(err){ throw err; }

  opt.exports = {};

  ls.forEach(function(file){
    if(/^\./.test(file) && !opt.dot){ return; }
    var pathname = path.join(opt.dirname, file);
    if(pathname === caller){ return; }

    var ext = path.extname(pathname);
    var key = util.camelCase(path.basename(pathname, ext));
    if(opt.exports[key]){ key += ext.slice(1); }

    try {
      // is it a file/module?
      opt.exports[key] = require(pathname);
    } catch(err){
      // then is a folder
      if(opt.recursive){
        opt.exports[key] = requireDir(pathname, {recursive: true});
      }
    }
  });

  return opt.exports;
}
