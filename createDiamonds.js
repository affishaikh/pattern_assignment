const {chooseDiamondType} = require('./src/patternsLib.js');
const main = function() {
  let diamondType = process.argv[2]
  let height = +process.argv[3];
  let diamond = chooseDiamondType(diamondType, height);
  console.log(diamond);
}
main();
