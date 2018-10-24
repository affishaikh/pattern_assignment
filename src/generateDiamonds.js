const generateLine = function(width, symbol){
  let result = ""
  for(let column = 1; column<=width; column++){
    result = result + symbol;
  }
  return result;
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

let diamondType = process.argv[2];
let height = +process.argv[3];
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
console.log(diamond);
