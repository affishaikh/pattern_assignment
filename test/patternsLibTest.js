const {generateRectangle, generateTriangle, generateDiamond} = require('../src/patternsLib.js');
const assert = require('assert');

//Test Rectangle
const generateRectangleTest = function() {
  let expectedOutput = [];
  let rectangleInput = {};

  //Test filled Rectangle
  rectangleInput.type = "filled";
  rectangleInput.width = 2;
  rectangleInput.height = 2;
  expectedOutput = ["**","**"];
  assert.deepEqual(generateRectangle(rectangleInput),expectedOutput);

  rectangleInput.width = 3;
  rectangleInput.height = 3;
  expectedOutput = ["***","***","***"];
  assert.deepEqual(generateRectangle(rectangleInput),expectedOutput);

  rectangleInput.width = 20;
  rectangleInput.height = 3;
  expectedOutput = ["********************","********************","********************"];
  assert.deepEqual(generateRectangle(rectangleInput),expectedOutput);

  //Test empty rectangle
  rectangleInput.type = "empty";
  rectangleInput.width = 20;
  rectangleInput.height = 3;
  expectedOutput = ["********************","*                  *","********************"];
  assert.deepEqual(generateRectangle(rectangleInput),expectedOutput);

  rectangleInput.width = 3;
  rectangleInput.height = 3;
  expectedOutput = ["***","* *","***"];
  assert.deepEqual(generateRectangle(rectangleInput),expectedOutput);
 
  //Test alternating Rectangle
  rectangleInput.type = "alternating";
  rectangleInput.width = 2;
  rectangleInput.height = 2;
  expectedOutput = ["**","--"];
  assert.deepEqual(generateRectangle(rectangleInput),expectedOutput);

  rectangleInput.width = 3;
  rectangleInput.height = 3;
  expectedOutput = ["***","---","***"];
  assert.deepEqual(generateRectangle(rectangleInput),expectedOutput);

  rectangleInput.width = 20;
  rectangleInput.height = 3;
  expectedOutput = ["********************","--------------------","********************"];
  assert.deepEqual(generateRectangle(rectangleInput),expectedOutput);
}

const generateInputObject = function(type, height) {
  return {type, height};
}

//Test Triangle
const generateTriangleTest = function() {
  let expectedOutput = "";
  let triangleInput = {};

  //Test left indented Triangle
  triangleInput = generateInputObject("left", 2);
  expectedOutput = ["* ","**"];
  assert.deepEqual(generateTriangle(triangleInput),expectedOutput);

  triangleInput = generateInputObject("left", 3);
  expectedOutput = ["*  ","** ","***"];
  assert.deepEqual(generateTriangle(triangleInput),expectedOutput);

  triangleInput = generateInputObject("left", 5);
  expectedOutput = ["*    ","**   ","***  ","**** ","*****"];
  assert.deepEqual(generateTriangle(triangleInput),expectedOutput);

  triangleInput = generateInputObject("left", 1);
  expectedOutput = ["*"];
  assert.deepEqual(generateTriangle(triangleInput),expectedOutput);

  //Test right indented rectangle
  triangleInput = generateInputObject("right", 2);
  expectedOutput = [" *","**"];
  assert.deepEqual(generateTriangle(triangleInput),expectedOutput);

  triangleInput = generateInputObject("right", 3);
  expectedOutput = ["  *"," **","***"];
  assert.deepEqual(generateTriangle(triangleInput),expectedOutput);

  triangleInput = generateInputObject("right", 5);
  expectedOutput = ["    *","   **","  ***"," ****","*****"];
  assert.deepEqual(generateTriangle(triangleInput),expectedOutput);

  triangleInput = generateInputObject("right", 1);
  expectedOutput = ["*"];
  assert.deepEqual(generateTriangle(triangleInput),expectedOutput);
}

//Test Diamond
const generateDiamondTest = function() {
  let expectedOutput = "";
  let diamondInput = {};

  //Test filled Diamond
  diamondInput = generateInputObject("filled", 3);
  expectedOutput = [" * ","***"," * "];
  assert.deepEqual(generateDiamond(diamondInput),expectedOutput);

  diamondInput = generateInputObject("filled", 2);
  expectedOutput = ["*"];
  assert.deepEqual(generateDiamond(diamondInput),expectedOutput);

  //Test empty rectangle
  diamondInput.type = "hollow";
  diamondInput.height = 3;
  expectedOutput = " * \n* *\n * ";
  assert.equal(generateDiamond(diamondInput),expectedOutput);

  diamondInput.height = 5;
  expectedOutput = "  *  \n * * \n*   *\n * * \n  *  ";
  assert.equal(generateDiamond(diamondInput),expectedOutput);
 
  //Test angle Diamond
  diamondInput.type = "angle";
  diamondInput.height = 3;
  expectedOutput = " * \n* *\n * ";
  assert.equal(generateDiamond(diamondInput),expectedOutput);

  diamondInput.height = 5;
  expectedOutput = "  *  \n / \\ \n*   *\n \\ / \n  *  ";
  assert.equal(generateDiamond(diamondInput),expectedOutput);
}

generateRectangleTest();
generateTriangleTest();
generateDiamondTest();
console.log("All tests passed");
