goog.module('loadFromGoogModule');

const mod1 = goog.require('googModule1');
console.log(mod1(3));

const foo = require('./cjs1');
// var dup = 'a';
// console.log(foo(1) + dup);

// import bar from './esmodule1';
// console.log(bar(1) + dup);
