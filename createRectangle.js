const {generateRectangle} = require('./src/patternsLib.js');
const {extractArgumentsForRectangle} = require('./src/patternsUtilLib.js');

const main = function() {
  let parametersForRectangle = extractArgumentsForRectangle(process.argv); 
  let rectangle = generateRectangle(parametersForRectangle);
  console.log(rectangle);
}
main();
