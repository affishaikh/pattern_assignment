const {generateDiamond} = require('./src/patternsLib.js');
const {extractArgumentsForTriangleAndDiamond} = require('./src/patternsUtilLib.js');

const main = function() {
  let parametersForDiamond = extractArgumentsForTriangleAndDiamond(process.argv);
  let diamond = generateDiamond(parametersForDiamond);
  diamond = diamond.join("\n");
  console.log(diamond);
}
main();
