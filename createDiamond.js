const {generateDiamond} = require('./src/patternsLib.js');
const main = function() {
  let diamondType = process.argv[2]
  let height = +process.argv[3];
  let diamond = generateDiamond(diamondType, height);
  console.log(diamond);
}
main();
