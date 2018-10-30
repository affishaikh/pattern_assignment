const {generateLine, generateEmptyLine} = require('../src/patternsUtilLib.js');
const assert = require('assert');

//Test generateLine
const generateLineTest = function() {
  let expectedOutput = "";
  expectedOutput = "****"
  assert.equal(generateLine(4,"*"), expectedOutput);
  expectedOutput = "********"
  assert.equal(generateLine(8,"*"), expectedOutput);
  expectedOutput = ""
  assert.equal(generateLine(0,"*"), expectedOutput);
}

const generateEmptyLineTest = function() {
  let expectedOutput = "";
  expectedOutput = "*  *"
  assert.equal(generateEmptyLine('*',' ','*',4), expectedOutput);
  expectedOutput = "/      \\";
  assert.equal(generateEmptyLine('/',' ','\\',8), expectedOutput);
  expectedOutput = "\\      /";
  assert.equal(generateEmptyLine('\\',' ','/',8), expectedOutput);
  expectedOutput = "**";
  assert.equal(generateEmptyLine('*',' ','*',2), expectedOutput);
  expectedOutput = "*"
  assert.equal(generateEmptyLine('*',' ','*',1), expectedOutput);
}

generateLineTest();
generateEmptyLineTest();
console.log("All Tests passed...")
