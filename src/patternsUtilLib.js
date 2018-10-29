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

exports.createRectangleGenerator = function(parametersForRectangle){
  let width = parametersForRectangle.width;
  return function() {
    return generateLine(width, "*");
  }
}

exports.extractArgumentsForRectangle = function(arguments) {
  return {type:arguments[2], width:+arguments[3], height:+arguments[4] };
}

exports.extractArgumentsForTriangleAndDiamond = function(arguments) {
  return {type:arguments[2], height:+arguments[3] };
}

exports.generateLine = generateLine;
exports.generateEmptyLine = generateEmptyLine;
