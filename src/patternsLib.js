const {createFilledRectangleGenerator, generateLine, generateEmptyLine} = require('./patternsUtilLib.js');
const {createEmptyRectangleGenerator,createAlternatingRectangleGenerator} = require('./patternsUtilLib.js');
const {createTriangleGenerator, flipLines} = require('./patternsUtilLib.js');
const {createFilledDiamondGenerator, createHollowDiamondGenerator, createAngleDiamondGenerator, generateArrayForDiamond} = require('./patternsUtilLib.js');

const generateFilledRectangle = function(parametersForRectangle){
  let width = parametersForRectangle.width;
  let height = parametersForRectangle.height;
  let result = new Array(height).fill(0);
  let createRectangle = createFilledRectangleGenerator(parametersForRectangle);
  result = result.map(createRectangle);
  return result;
}

const generateAlternatingRectangle = function(parametersForRectangle){
  let width = parametersForRectangle.width;
  let height = parametersForRectangle.height;
  let result = new Array(height).fill(0);
  let createRectangle = createAlternatingRectangleGenerator(parametersForRectangle, 0);
  result = result.map(createRectangle);
  return result;
}

const generateEmptyRectangle = function(parametersForRectangle){
  let width = parametersForRectangle.width;
  let height = parametersForRectangle.height;
  let result = new Array(height).fill(0);
  let createRectangle = createEmptyRectangleGenerator(parametersForRectangle, 0);
  result = result.map(createRectangle);
  return result;
}

const generateRectangle = function(parametersForRectangle) {
  let rectangleType = parametersForRectangle.type;
  let width = parametersForRectangle.width;
  let height = parametersForRectangle.height;
  let isTypeFilled = (rectangleType == "filled");
  let isTypeAlternating = (rectangleType == "alternating");
  let isTypeEmpty = (rectangleType == "empty");
  if(isTypeFilled){
    return generateFilledRectangle(parametersForRectangle);
  }

  if(isTypeAlternating){
    return generateAlternatingRectangle(parametersForRectangle);
  }

  if(isTypeEmpty){
    return generateEmptyRectangle(parametersForRectangle);
  }
  return "";
}

const generateLeftIndentedTriangle = function(parametersForTriangle){
  let height = parametersForTriangle.height;
  let result = new Array(height).fill(0);
  let triangleGenerator = createTriangleGenerator(1,height);
  result = result.map(triangleGenerator); 
  return result;
}

const generateRightIndentedTriangle = function(parametersForTriangle){
  let result = generateLeftIndentedTriangle(parametersForTriangle);
  result = result.map(flipLines);
  return result;
}

const generateTriangle = function(parametersForTriangle) {
  let triangleType = parametersForTriangle.type;
  let height = parametersForTriangle.height;
  let triangle = "";
  let isTypeLeft = (triangleType == "left");
  let isTypeRight = (triangleType == "right");
  if(isTypeLeft) {
    triangle = generateLeftIndentedTriangle(parametersForTriangle);
  }
  if(isTypeRight) {
    triangle = generateRightIndentedTriangle(parametersForTriangle);
  }
  return triangle;
}

const generateFilledDiamond = function(parametersForDiamond){
  let result = [];
  let height = parametersForDiamond.height;
  result = generateArrayForDiamond(height);
  let diamondGenerator = createFilledDiamondGenerator(height);
  result = result.map(diamondGenerator);
  return result;
}

const generateHollowDiamond = function(parametersForDiamond) {
  let result = [];
  let height = parametersForDiamond.height;
  result = generateArrayForDiamond(height);
  let diamondGenerator = createHollowDiamondGenerator(height);
  result = result.map(diamondGenerator);
  return result;
}

const generateAngleDiamond = function(parametersForDiamond) {
  let result = [];
  let height = parametersForDiamond.height;
  let arrayForDiamond = generateArrayForDiamond(height);
  let diamondGenerator = createAngleDiamondGenerator('/',' ','\\', height);
  let upperPartArray = arrayForDiamond.slice(0, Math.floor(height/2));
  let upperPart = upperPartArray.map(diamondGenerator);
  let middleLine = [generateEmptyLine('*',' ','*',height)];
  diamondGenerator = createAngleDiamondGenerator('\\',' ','/', height);
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
    diamond = generateFilledDiamond(parametersForDiamond);
  }

  if(isTypeHollow) {
      diamond = generateHollowDiamond(parametersForDiamond);
  }

  if(isTypeAngle) {
      diamond = generateAngleDiamond(parametersForDiamond);
  }
  return diamond;
}

exports.generateDiamond = generateDiamond;
exports.generateTriangle = generateTriangle;
exports.generateRectangle = generateRectangle;
