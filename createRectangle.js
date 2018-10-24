const {chooseRectangleType} = require('./src/patternsLib.js');

const main = function() {
  let rectangleType = process.argv[2]
  let width = +process.argv[3];
  let height = +process.argv[4];
  let rectangle = chooseRectangleType(rectangleType, height, width);
  console.log(rectangle);
}
main();
