const {generateLine, generateEmptyLine} = require('./patternsUtilLib.js');
const {createFilledRectangleGenerator,createEmptyRectangleGenerator,createAlternatingRectangleGenerator} = require('./patternsUtilLib.js');
const {createLeftIndentedTriangleGenerator,createRightIndentedTriangleGenerator } = require('./patternsUtilLib.js');
const {createDiamondGenerator, createHollowDiamondGenerator, createAngleDiamondGenerator, generateArrayForDiamond} = require('./patternsUtilLib.js');

const rectangleGenerator = function(parametersForRectangle, createRectangleGenerator){
  let width = parametersForRectangle.width;
  let height = parametersForRectangle.height;
  let result = new Array(height).fill(0);
  let createRectangle = createRectangleGenerator(parametersForRectangle, 0);
  result = result.map(createRectangle);
  return result;
}

const generateRectangle = function(parametersForRectangle) {
  let rectangleType = parametersForRectangle.type;
  let isTypeFilled = (rectangleType == "filled");
  let isTypeAlternating = (rectangleType == "alternating");
  let isTypeEmpty = (rectangleType == "empty");
  if(isTypeFilled){
    return rectangleGenerator(parametersForRectangle, createFilledRectangleGenerator);
  }

  if(isTypeAlternating){
    return rectangleGenerator(parametersForRectangle, createAlternatingRectangleGenerator);
  }

  if(isTypeEmpty){
    return rectangleGenerator(parametersForRectangle, createEmptyRectangleGenerator);
  }
  return "";
}

const triangleGenerator = function(parametersForTriangle, createTriangleGenerator){
  let height = parametersForTriangle.height;
  let result = new Array(height).fill(0);
  let createTriangle = createTriangleGenerator(1,height);
  result = result.map(createTriangle); 
  return result;
}

const generateTriangle = function(parametersForTriangle) {
  let triangleType = parametersForTriangle.type;
  let triangle = "";
  let isTypeLeft = (triangleType == "left");
  let isTypeRight = (triangleType == "right");
  if(isTypeLeft) {
    triangle = triangleGenerator(parametersForTriangle, createLeftIndentedTriangleGenerator);
  }
  if(isTypeRight) {
    triangle = triangleGenerator(parametersForTriangle, createRightIndentedTriangleGenerator);
  }
  return triangle;
}

const diamondGenerator = function(parametersForDiamond) {
  let result = [];
  let firstCharacter = parametersForDiamond.firstCharacter;
  let middleCharacter = parametersForDiamond.middleCharacter;
  let lastCharacter = parametersForDiamond.lastCharacter;
  let height = parametersForDiamond.height;
  let arrayForDiamond = generateArrayForDiamond(height);
  let diamondGenerator = createDiamondGenerator(firstCharacter,middleCharacter,lastCharacter, height);
  let upperPartArray = arrayForDiamond.slice(0, Math.floor(height/2));
  let upperPart = upperPartArray.map(diamondGenerator);
  let middleLine = [generateEmptyLine('*',middleCharacter,'*',height)];
  diamondGenerator = createDiamondGenerator(firstCharacter,middleCharacter,lastCharacter, height);
  if(parametersForDiamond.type === 'angle') {
    diamondGenerator = createDiamondGenerator('\\',' ','/', height);
  }
  let lowerPartArray = arrayForDiamond.slice(Math.floor(height/2)+1, height);
  let lowerPart = lowerPartArray.map(diamondGenerator);
  result = upperPart.concat(middleLine).concat(lowerPart);
  return result;
}

const generateDiamond = function(parametersForDiamond) {
  let diamondType = parametersForDiamond.type;
  let height = parametersForDiamond.height;
  let diamond = "";
  let isTypeFilled = (diamondType == "filled");
  let isTypeHollow = (diamondType == "hollow");
  let isTypeAngle = (diamondType == "angle");

  if(height%2==0){
    height -= 1;
    parametersForDiamond.height = height;
  }

  if(isTypeFilled) {
    parametersForDiamond.firstCharacter = "*";
    parametersForDiamond.middleCharacter = "*";
    parametersForDiamond.lastCharacter = "*";
    diamond = diamondGenerator(parametersForDiamond);
  }

  if(isTypeHollow) {
    parametersForDiamond.firstCharacter = "*";
    parametersForDiamond.middleCharacter = " ";
    parametersForDiamond.lastCharacter = "*";
    diamond = diamondGenerator(parametersForDiamond);
  }

  if(isTypeAngle) {
    parametersForDiamond.firstCharacter = "/";
    parametersForDiamond.middleCharacter = " ";
    parametersForDiamond.lastCharacter = "\\";
    diamond = diamondGenerator(parametersForDiamond);
  }
  return diamond;
}

exports.generateDiamond = generateDiamond;
exports.generateTriangle = generateTriangle;
exports.generateRectangle = generateRectangle;
