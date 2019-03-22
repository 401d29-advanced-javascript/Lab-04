'use strict';

var fs = require('fs');
const os = require('os');
// const http =  require('http');

console.log( os.endianness() );

let buffer1 = new Buffer([67, 111, 114, 121]);
let buffer2 = new Buffer([65, 97, 114, 111, 110]);
let buffer3 = new Buffer([83, 104, 97, 103, 103, 121]);

let contents = [buffer1, buffer2, buffer3];

contents.forEach(buffer => {
  console.log('Buffer AFTER forEach(): ', buffer.toString());
});


var something = new Buffer([39, 117, 115, 101, 32, 115, 116, 114, 105, 99, 116, 39, 59, 10, 10, 118, 97, 114, 32, 102, 115, 32, 61, 32, 114, 101, 113, 117, 105, 114, 101, 40, 39, 102, 115, 39, 41, 59, 10, 99, 111, 110, 115, 116, 32, 111, 115, 32, 61, 32, 114, 101, 113, 117, 105, 114, 101, 40, 39, 111, 115, 39, 41, 59, 10, 10, 10, 99, 111, 110, 115, 111, 108, 101, 46, 108, 111, 103, 40, 32, 111, 115, 46, 101, 110, 100, 105, 97, 110, 110, 101, 115, 115, 40, 41, 32, 41, 59, 10, 10, 108, 101, 116, 32, 98, 117, 102, 102, 101, 114, 49, 32, 61, 32, 110, 101, 119, 32, 66, 117, 102, 102, 101, 114, 40, 91, 54, 55, 44, 32, 49, 49, 49, 44, 32, 49, 49, 52, 44, 32, 49, 50, 49, 93, 41, 59, 10, 108, 101, 116, 32, 98, 117, 102, 102, 101, 114, 50, 32, 61, 32, 110, 101, 119, 32, 66, 117, 102, 102, 101, 114, 40, 91, 54, 53, 44, 32, 57, 55, 44, 32, 49, 49, 52, 44, 32, 49, 49, 49, 44, 32, 49, 49, 48, 93, 41, 59, 10, 108, 101, 116, 32, 98, 117, 102, 102, 101, 114, 51, 32, 61, 32, 110, 101, 119, 32, 66, 117, 102, 102, 101, 114, 40, 91, 56, 51, 44, 32, 49, 48, 52, 44, 32, 57, 55, 44, 32, 49, 48, 51, 44, 32, 49, 48, 51, 44, 32, 49, 50, 49, 93, 41, 59, 10, 10, 108, 101, 116, 32, 99, 111, 110, 116, 101, 110, 116, 115, 32, 61, 32, 91, 98, 117, 102, 102, 101, 114, 49, 44, 32, 98, 117, 102, 102, 101, 114, 50, 44, 32, 98, 117, 102, 102, 101, 114, 51, 93, 59, 10, 10, 99, 111, 110, 116, 101, 110, 116, 115, 46, 102, 111, 114, 69, 97, 99, 104, 40, 98, 117, 102, 102, 101, 114, 32, 61, 62, 32, 123, 10, 32, 32, 99, 111, 110, 115, 111, 108, 101, 46, 108, 111, 103, 40, 39, 66, 117, 102, 102, 101, 114, 32, 65, 70, 84, 69, 82, 32, 102, 111, 114, 69, 97, 99, 104, 40, 41, 58, 32, 39, 44, 32, 98, 117, 102, 102, 101, 114, 46, 116, 111, 83, 116, 114, 105, 110, 103, 40, 41, 41, 59, 10, 125, 41, 59]);

console.log('hit!');

fs.appendFile('./files/loop.js', something, function (err) {
  if (err) throw err;
  console.log('loop.js created: ', something.toString());
});


fs.readFile('./files/pair-programming.txt', (err, data) => {
  if(err) {throw err;}
  console.log(data);
  let content = [];
  content.push(data);
  console.log(content);
  // Buffer.slice(46, 32);
  //iterate through pair-programming.txt content and find section titles, paragraph sentences, numbered section titles
});