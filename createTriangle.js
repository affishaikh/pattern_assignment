const {chooseTriangleType} = require('./src/patternsLib.js');

const main = function() {
  let triangleType = process.argv[2];
  let height = +process.argv[3];
  let triangle = chooseTriangleType(triangleType, height);
  console.log(triangle);
}
main();
