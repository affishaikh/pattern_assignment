const generateLine = function(width, symbol){
  let result = ""
  for(let column = 1; column<=width; column++){
    result = result + symbol;
  }
  return result;
}

const generateEmptyLine = function(width){
  let symbol = "*";
  let result = "";
  result += symbol;
  for(let column = 2; column<=width-1; column++){
    let symbol = " ";
    result = result + symbol;
  }
  result += symbol;
  return result;
}

const generateFilledRectangle = function(height, width){
  let result = "";
  let delimeter = "";
  let filledLine = generateLine(width, "*");
  for(let row = 1; row<=height; row++)
  {
    result = result + delimeter + filledLine ;
    delimeter = "\n";
  }
  return result;
}

const generateAlternatingRectangle = function(height, width){
  let result = "";
  let delimeter = "";
  let filledLineStar = generateLine(width, "*");
  let filledLineDash = generateLine(width, "-");
  for(let row = 1; row<=height; row++)
  {
    let filledLine = filledLineStar;
    if(row%2 == 0){
      filledLine = filledLineDash;
    }
    result = result + delimeter + filledLine ;
    delimeter = "\n";
  }
  return result;
}

const generateEmptyRectangle = function(height, width){
  let result = "";
  let delimeter = "\n";
  let filledLineStar = generateLine(width, "*");
  let emptyLine = generateEmptyLine(width);
  result = filledLineStar;
  for(let row = 2; row<=height-1; row++)
  {
    let filledLine = emptyLine;
    result = result + delimeter + filledLine ;
  }
  result = result + delimeter + filledLineStar;
  return result;
}

const chooseRectangleType = function(rectangleType, height, width) {
  let isTypeFilled = (rectangleType == "filled");
  let isTypeAlternating = (rectangleType == "alternating");
  let isTypeEmpty = (rectangleType == "empty");
  if(isTypeFilled){
    return generateFilledRectangle(height, width);
  }

  if(isTypeAlternating){
    return generateAlternatingRectangle(height, width);
  }

  if(isTypeEmpty){
    return generateEmptyRectangle(height, width);
  }
  return "";
}

const generateLeftIndentedTriangle = function(height){
  let result = "";
  let width = 1;
  let delimeter = "";
  for(let row = 1; row <= height; row++){
    let filledLine =  generateLine(width++, "*");
    result = result + delimeter + filledLine;
    delimeter = "\n";
  }
  return result;
}

const generateRightIndentedTriangle = function(height){
  let result = "";
  let widthOfSpaces = height - 1;
  let widthOfStar = 1;
  let delimeter = "";
  for(let row = 1; row <= height; row++){
    let spaces = generateLine(widthOfSpaces--, " ");
    result = result + delimeter + spaces;
    let stars = generateLine(widthOfStar++, "*");
    result = result + stars;
    delimeter = "\n";
  }
  return result;
}

const chooseTriangleType = function(triangleType, height) {
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

const generateDiamond = function(height){
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

const chooseDiamondType = function(diamondType, height) {
  let diamond = "";
  let isTypeDiamond = (diamondType == "diamond");
  let isTypeHollow = (diamondType == "hollow");
  let isTypeAngle = (diamondType == "angle");

  if(height%2==0){
    height -= 1;
  }

  if(isTypeDiamond) {
    diamond = generateDiamond(height);
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

exports.chooseDiamondType = chooseDiamondType;
exports.chooseTriangleType = chooseTriangleType;
exports.chooseRectangleType = chooseRectangleType;
