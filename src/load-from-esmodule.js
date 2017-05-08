import foo from './esmodule1';

const dup = 1;
console.log(foo(1) + dup);

const bar = require('./cjs1');
console.log(bar(2) + dup);

// goog.module('foooo');
// const mod1 = goog.require('googModule1');
// console.log(mod1(3));
