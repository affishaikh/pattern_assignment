const {generateTriangle} = require('./src/patternsLib.js');

const main = function() {
  let triangleType = process.argv[2];
  let height = +process.argv[3];
  let triangle = generateTriangle(triangleType, height);
  console.log(triangle);
}
main();
