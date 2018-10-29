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
  let middlePart = generateLine(width - 2, " ");
  result += middlePart;
  if(!(width===1)) {
    result += symbol;
  }
  return result;
}

exports.createFilledRectangleGenerator = function(parametersForRectangle){
  let width = parametersForRectangle.width;
  return function() {
    return generateLine(width, "*");
  }
}


exports.createAlternatingRectangleGenerator = function(parametersForRectangle, index){
  let width = parametersForRectangle.width;
  return function() {
    let isIndexEven = (index%2 === 0);
    let line = generateLine(width, "*")
    if(!isIndexEven)
      line = generateLine(width, "-");
    index++;
    return line;
  }
}

exports.createEmptyRectangleGenerator = function(parametersForRectangle, index){
  let width = parametersForRectangle.width;
  let height = parametersForRectangle.height;
  return function() {
    let line = generateLine(width, "*")
    let isLineFilled = (index === 0 || index === height-1);
    if(!isLineFilled)
      line = generateEmptyLine(width);
    index++;
    return line;
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
