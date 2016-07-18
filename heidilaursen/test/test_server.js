'use strict'

const fs = require('fs');
const myFile = require('/files/*.txt');
const server = require('./../server').server;
const mocha = require('mocha');
const expect = require('chai').expect;

// //
// fs.readDir = returns array of files
// get length. check length
// check toUpperCase
// pop off of array and check dat

var testFile = (__dirname + '/files/');
var testChunk;

describe('Should write to file with certain keywords', () => {
  it('should have GET and Host keywords', () => {
    expect(testFile).to.have.any.keys('GET', 'Host');
  });
});

describe('Server: 3000', () => {
  it('Should connect to local server: 3000', () => {
    expect(server.listen().to.eql(3000));
});
