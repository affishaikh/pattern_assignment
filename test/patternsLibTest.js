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

const generateTriangleInputObject = function(type, height) {
  return {type, height};
}

//Test Triangle
const generateTriangleTest = function() {
  let expectedOutput = "";
  let triangleInput = {};

  //Test left indented Triangle
  triangleInput = generateTriangleInputObject("left", 2);
  expectedOutput = ["* ","**"];
  assert.equal(generateTriangle(triangleInput),expectedOutput);

  triangleInput = generateTriangleInputObject(["left", 3);
  expectedOutput = ["*  ","** ","***"];
  assert.equal(generateTriangle(triangleInput),expectedOutput);

  triangleInput = generateTriangleInputObject(["left", 5);
  expectedOutput = ["*    ","**   ","***  ","**** ","*****"];
  assert.equal(generateTriangle(triangleInput),expectedOutput);

  triangleInput = generateTriangleInputObject(["left", 1);
  expectedOutput = ["*"];
  assert.equal(generateTriangle(triangleInput),expectedOutput);

  //Test right indented rectangle
  triangleInput.type = "right";
  triangleInput.height = 3;
  expectedOutput = "  *\n **\n***";
  assert.equal(generateTriangle(triangleInput),expectedOutput);

  triangleInput.height = 5;
  expectedOutput = "    *\n   **\n  ***\n ****\n*****";
  assert.equal(generateTriangle(triangleInput),expectedOutput);
}

//Test Diamond
const generateDiamondTest = function() {
  let expectedOutput = "";
  let diamondInput = {};

  //Test filled Diamond
  diamondInput.type = "filled";
  diamondInput.height = 3;
  expectedOutput = " * \n***\n * ";
  assert.equal(generateDiamond(diamondInput),expectedOutput);

  diamondInput.height = 2;
  expectedOutput = "*";
  assert.equal(generateDiamond(diamondInput),expectedOutput);

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
