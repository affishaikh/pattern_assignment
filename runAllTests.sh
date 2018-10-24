#! /usr/local/bin/zsh
./runTest.sh src/generateRectangles.js test/inputFiles/allRectanglesInput test/outputFiles/allRectanglesOutput
./runTest.sh src/generateTriangles.js test/inputFiles/allTrianglesInput test/outputFiles/allTrianglesOutput
./runTest.sh src/generateDiamonds.js test/inputFiles/allDiamondsInput test/outputFiles/allDiamondsOutput
