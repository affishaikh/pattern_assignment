const {generateRectangle, generateTriangle, generateDiamond} = require('../src/patternsLib.js');
const assert = require('assert');

//Test Rectangle
const generateRectangleTest = function() {
  let expectedOutput = [];
  let rectangleInput = {type : "", width: 0, height: 0};

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
  expectedOutput = "********************\n*                  *\n********************";
  assert.equal(generateRectangle('empty',3,20),expectedOutput); 
  expectedOutput = "***\n* *\n***";
  assert.equal(generateRectangle('empty',3,3),expectedOutput); 
  
  //Test alternating Rectangle
  expectedOutput = "**\n--";
  assert.equal(generateRectangle('alternating',2,2),expectedOutput); 
  expectedOutput = "***\n---\n***";
  assert.equal(generateRectangle('alternating',3,3),expectedOutput); 
  expectedOutput = "********************\n--------------------\n********************";
  assert.equal(generateRectangle('alternating',3,20),expectedOutput); 
}

//Test Triangle
const generateTriangleTest = function() {
  let expectedOutput = "";

  //Test left indented Triangle
  expectedOutput = "*\n**";
  assert.equal(generateTriangle('left',2),expectedOutput); 
  expectedOutput = "*\n**\n***";
  assert.equal(generateTriangle('left',3),expectedOutput); 
  expectedOutput = "*\n**\n***\n****\n*****";
  assert.equal(generateTriangle('left',5),expectedOutput); 

  //Test right indented rectangle
  expectedOutput = "  *\n **\n***";
  assert.equal(generateTriangle('right',3),expectedOutput); 
  expectedOutput = "    *\n   **\n  ***\n ****\n*****";
  assert.equal(generateTriangle('right',5),expectedOutput); 
}

//Test Diamond
const generateDiamondTest = function() {
  let expectedOutput = "";

  //Test filled Diamond
  expectedOutput = " * \n***\n * ";
  assert.equal(generateDiamond('filled',3),expectedOutput); 
  expectedOutput = "*";
  assert.equal(generateDiamond('filled',2),expectedOutput); 

  //Test empty rectangle
  expectedOutput = " * \n* *\n * ";
  assert.equal(generateDiamond('hollow',3),expectedOutput); 
  expectedOutput = "  *  \n * * \n*   *\n * * \n  *  ";
  assert.equal(generateDiamond('hollow',5),expectedOutput); 
  
  //Test angle Diamond
  expectedOutput = " * \n* *\n * ";
  assert.equal(generateDiamond('angle',3),expectedOutput); 
  expectedOutput = "  *  \n / \\ \n*   *\n \\ / \n  *  ";
  assert.equal(generateDiamond('angle',5),expectedOutput); 
}

generateRectangleTest();
generateTriangleTest();
generateDiamondTest();
console.log("All tests passed");
