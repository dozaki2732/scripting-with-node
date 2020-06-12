const fs = require("fs");

const basicSourceFile = JSON.parse(fs.readFileSync("JSON/basic.json"));

const intermediateSourceFile = JSON.parse(
   fs.readFileSync("JSON/intermediate.json")
);

const functionalSourceFile = JSON.parse(
   fs.readFileSync("JSON/functional.json")
);

const algorithmSourceFile = JSON.parse(fs.readFileSync("JSON/algorithm.json"));

combinedFiles = basicSourceFile.concat(
   intermediateSourceFile,
   functionalSourceFile,
   algorithmSourceFile
);

const targetFile = "./dist-files/dist.json";

fs.writeFileSync(targetFile, JSON.stringify(combinedFiles));
