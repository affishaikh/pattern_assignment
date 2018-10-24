const generateLine = function(width, symbol){
  let result = ""
  for(let column = 1; column<=width; column++){
    result = result + symbol;
  }
  return result;
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

let triangleType = process.argv[2];
let height = +process.argv[3];
let triangle = "";
let isTypeLeft = (triangleType == "left");
let isTypeRight = (triangleType == "right");
if(isTypeLeft) {
  triangle = generateLeftIndentedTriangle(height);
}

if(isTypeRight) {
  triangle = generateRightIndentedTriangle(height);
}
console.log(triangle);
