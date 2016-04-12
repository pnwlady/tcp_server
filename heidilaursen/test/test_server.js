'use strict'

const fs = require('fs');
const server = require('./../server').server;
const mocha = require('mocha');
const chai = require('chai');

var testFile;
var testChunk;

describe('Should write file with date now info', () => {
  before(() => {
    // testFile = new Date.now();
      expect.fs.writeFile(__dirname + '/files/' + Date.now() + '.txt', 'This text file was made on ' + Date() + '\n' + chunk);
  });
});

it('should create file with chunk data piped in', () => {
  expect.chunk = chunk.toString().toUpperCase();
  process.stdout.write(chunk);
});
