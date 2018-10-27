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

exports.generateLine = generateLine;
exports.generateEmptyLine = generateEmptyLine;
