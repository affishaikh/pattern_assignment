const {createFilledRectangleGenerator, generateLine, generateEmptyLine} = require('./patternsUtilLib.js');
const {createEmptyRectangleGenerator,createAlternatingRectangleGenerator} = require('./patternsUtilLib.js');
const {createTriangleGenerator, flipLines} = require('./patternsUtilLib.js');

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

const generateLeftIndentedTriangle = function(height){
  let result = new Array(height).fill(0);
  let triangleGenerator = createTriangleGenerator(1,height);
  result = result.map(triangleGenerator); 
  return result;
}

const generateRightIndentedTriangle = function(height){
  let result = generateLeftIndentedTriangle(height);
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
    triangle = generateLeftIndentedTriangle(height);
  }
  if(isTypeRight) {
    triangle = generateRightIndentedTriangle(height);
  }
  return triangle;
}

const generateFilledDiamond = function(height){
  let result = "";
  let width = 1;
  let widthOfSpaces = Math.floor(height/2);
  let delimeter = "";
  let lowerPart = "";
  for(let row = 1; row <= Math.floor(height/2); row++){
    let upperPartLine = "";
    let spaces = generateLine(widthOfSpaces--, " ");
    let stars = generateLine(width, "*");
    upperPartLine = spaces + stars + spaces;
    lowerPart = upperPartLine + delimeter + lowerPart;
    result = result + delimeter + upperPartLine;
    width += 2;
    delimeter = "\n";
  }
  let stars = generateLine(width, "*");
  result += delimeter + stars;
  result += delimeter + lowerPart;
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
  let isTypeDiamond = (diamondType == "filled");
  let isTypeHollow = (diamondType == "hollow");
  let isTypeAngle = (diamondType == "angle");

  if(height%2==0){
    height -= 1;
  }

  if(isTypeDiamond) {
    diamond = generateFilledDiamond(height);
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
