const generateLine = function(width, symbol){
  let result = ""
  for(let column = 1; column<=width && symbol != " "; column++){
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

const name = function(rectangleType, height, width) {
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

const main = function() {
  let rectangleType = process.argv[2]
  let width = +process.argv[3];
  let height = +process.argv[4];
  let rectangle = name(rectangleType, height, width);
  console.log(rectangle);
}
main();
