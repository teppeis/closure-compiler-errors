const foo = require('./cjs1');
var dup = 'a';
console.log(foo(1) + dup);

const bar = require('./esmodule1').default;
console.log(bar(1) + dup);

// goog.require('googModule1');
// console.log(googModule1(3));
// console.log(module$exports$googModule1(4));
