# require.dir [![NPM version][badge-version]][npm][![downloads][badge-downloads]][npm]

[documentation](#documentation) -
[install](#install) -
[todo](#todo) -
[why](#why)

[![build][badge-build]][travis]

Require folders that may have modules inside.

## example

Say we have the following tree

```
./folder
├── a.js
├── a.json
├── module
│   └── index.js
└── module.js
```

and each module exports its `basename`, i.e.

```js
// ./folder/a.js
module.exports = 'a';
```

then

```js
var requireDir = require('require.dir');

requireDir('./folder') // =>
{
  a: 'a',
  ajson: {
    a: 'a'
  },
  module: 'module',
  modulejs: 'module'
}
```

## documentation

Require directories that may or may not have modules inside.

The `basename` of each file/module is used for the exported object. When in the given directory, if so happens, are files that have the same `basename` the extension is used for that key of the exported object.

Recurse folders if passed as an option.

The caller's path is always excluded.

> Note that modules are not recursed.
> Only folders that either do not have a package.json or an index file

### spec

The `module.exports` a function

```js
function requireDir([string dirname, object options])
```

_arguments_
- `dirname`, type string optional, directory to inspect and require
- `options`, type object optional, properties are:
   - `recursive`, type boolean optional, true if the function should recurse

_returns_
- object with all the exports

_throws_
- When `dirname` does not exists

_defaults_
- `dirname` to the caller's directory

## why

I've used [`require-dir`][require-dir] but wanted to have it also return `modules` by default without recursing.

## install

With [npm](http://npmjs.org)

    npm install --save require.dir

### test

    npm test

```
require.dir
  basic
    ✓ should return folder exports
  camelCase
    ✓ should camelCase folder exports
  recursive
    ✓ should recurse folder exports given {recursive: true}
  sameBasename
    ✓ should add lowerCase extension if basename existed

4 passing (23ms)
```

### license

![LICENSE](http://img.shields.io/npm/l/require.dir.svg?style=flat-square)

[npm]: https://npmjs.org/package/require.dir
[travis]: https://travis-ci.org/stringparser/require.dir/builds
[badge-build]: http://img.shields.io/travis/stringparser/require.dir/master.svg?style=flat-square
[require-dir]: https://npmjs.org/require-dir
[badge-version]: http://img.shields.io/npm/v/require.dir.svg?style=flat-square
[badge-downloads]: http://img.shields.io/npm/dm/require.dir.svg?style=flat-square
