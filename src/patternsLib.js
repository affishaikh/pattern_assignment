const {createFilledRectangleGenerator, generateLine, generateEmptyLine} = require('./patternsUtilLib.js');
const {createEmptyRectangleGenerator,createAlternatingRectangleGenerator} = require('./patternsUtilLib.js');
const {createTriangleGenerator, flipLines} = require('./patternsUtilLib.js');
const {createFilledDiamondGenerator} = require('./patternsUtilLib.js');

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
  for(let noOfStars = 1; noOfStars <= height; noOfStars+=2) {
    result.push(noOfStars);
  }
  for(noOfStars = height - 2; noOfStars >= 1; noOfStars-=2) {
    result.push(noOfStars);
  }
  let diamondGenerator = createFilledDiamondGenerator(height);
  result = result.map(diamondGenerator);
  return result;
}

const generateHollowDiamond = function(height){
  let result = "";
  let width = 1;
  let widthOfSpaces = Math.floor(height/2);
  let delimeter = "";
  let lowerPart = "";
  let spaces = generateLine(widthOfSpaces--, " ");
  let stars = generateLine(width, "*");
  result = spaces + stars + spaces;
  let lowestLine = result;

  for(let row = 2; row <= Math.floor(height/2); row++){
    let upperPartLine = "";
    let spaces =  generateLine(widthOfSpaces--, " ");
    let middleSpaces = generateLine(width, " ");
    upperPartLine = spaces + "*" + middleSpaces + "*" + spaces;
    lowerPart = upperPartLine + delimeter + lowerPart;
    result = result + "\n" + upperPartLine;
    width += 2;
    delimeter = "\n";
  }
  let middleSpaces = generateLine(width, " ");
  result += delimeter + "*" + middleSpaces + "*";
  result += delimeter + lowerPart;
  result += delimeter + lowestLine;
  return result;
}

const generateAngleDiamond = function(height){
  let width = 1;
  let widthOfSpaces = Math.floor(height/2);
  let delimeter = "";
  let lowerPart = "";
  let spaces = generateLine(widthOfSpaces--, " ");
  let stars =  generateLine(width, "*");
  let result =  spaces + stars + spaces;
  let lowestLine = result;

  for(let row = 2; row <= Math.floor(height/2); row++){
    let upperPartLine = "";
    let spaces = generateLine(widthOfSpaces--, " ");
    let middleSpaces =  generateLine(width, " "); 
    upperPartLine =  spaces + "/" + middleSpaces + "\\" + spaces;
    lowerPartLine = spaces + "\\" + middleSpaces + "/" + spaces;
    lowerPart = lowerPartLine + delimeter + lowerPart;
    result = result + "\n" + upperPartLine;
    width += 2;
    delimeter = "\n";
  }
  let middleSpaces = generateLine(width, " ");
  result += delimeter + "*" + middleSpaces + "*";
  result += delimeter + lowerPart;
  result += delimeter + lowestLine;
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
  }

  if(isTypeFilled) {
    diamond = generateFilledDiamond(parametersForDiamond);
  }

  if(isTypeHollow) {
    if(height == 1){
      diamond = "*";
    } else if(height == 3){
      diamond = " * \n* *\n * ";
    } else {
      diamond = generateHollowDiamond(height);
    }
  }

  if(isTypeAngle) {
    if(height == 1){
      diamond = "*";
    } else if(height == 3) {
      diamond = " * \n* *\n * ";
    } else {
      diamond = generateAngleDiamond(height);
    }  
  }
  return diamond;
}

exports.generateDiamond = generateDiamond;
exports.generateTriangle = generateTriangle;
exports.generateRectangle = generateRectangle;
