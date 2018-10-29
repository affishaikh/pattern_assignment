const {generateTriangle} = require('./src/patternsLib.js');
const {extractArgumentsForTriangleAndDiamond} = require('./src/patternsUtilLib.js');

const main = function() {
  let parametersForTriangle = extractArgumentsForTriangleAndDiamond(process.argv);
  let triangle = generateTriangle(parametersForTriangle);
  console.log(triangle);
}

main();
