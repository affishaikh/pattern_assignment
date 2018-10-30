const generateLine = function(width, symbol){
  let result = ""
  for(let column = 1; column<=width; column++){
    result = result + symbol;
  }
  return result;
}

const generateEmptyLine = function(firstCharacter, middleCharacter, lastCharacter, width){
  let result = "";
  result += firstCharacter;
  let middlePart = generateLine(width - 2, middleCharacter);
  result += middlePart;
  if(!(width===1)) {
    result += lastCharacter;
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
      line = generateEmptyLine('*',' ','*',width);
    index++;
    return line;
  }
}

exports.createTriangleGenerator = function(index, height) {
  return function() {
    let line = generateLine(index, "*");
    line += generateLine(height - index, " ");
    index++;
    return line;
  }
}

exports.flipLines = function(line) {
  line = line.split("");
  line = line.reverse();
  line = line.join("");
  return line;
}

exports.generateArrayForDiamond = function(height) {
  let result = [];
  for(let noOfStars = 1; noOfStars <= height; noOfStars+=2) {
    result.push(noOfStars);
  }
  for(noOfStars = height - 2; noOfStars >= 1; noOfStars-=2) {
    result.push(noOfStars);
  }
  return result;
}

const justifyLine = function(line, height, noOfStars) {
  let noOfSpaces = (height - noOfStars)/2;
  let spaces = generateLine(noOfSpaces, " ");
  let result = spaces + line + spaces; 
  return result;
}

exports.createFilledDiamondGenerator = function(height) {
  return function(noOfStars) {
    let line = generateLine(noOfStars,"*");
    line = justifyLine(line, height, noOfStars); 
    return line;
  }
}

exports.createHollowDiamondGenerator = function(height) {
  return function(noOfStars) {
    let line = generateEmptyLine('*',' ','*',noOfStars);
    line = justifyLine(line, height, noOfStars); 
    return line;
  }
}

exports.createAngleDiamondGenerator = function(firstCharacter, middleCharacter, lastCharacter, height) {
  return function(width) {
    let line = "";
    line = generateEmptyLine(firstCharacter, middleCharacter, lastCharacter, width);
    if(width === 1) {
      line = generateLine(width, '*');
    }
    line = justifyLine(line, height, width);
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
