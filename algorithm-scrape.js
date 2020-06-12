const fs = require("fs");
const { getComponents, getName, getDesc, trim, getInputs } = require("./regex");

const sourceFile = String(
   fs.readFileSync("html-pages/algorithm-functions.html")
);

const components = getComponents(sourceFile);
//console.log(components);

const componentObjs = components.map((component) => {
   return {
      name: getName(component)[0],
      desc: trim(getDesc(component)[0]), //get descript of a component that is an array > get first index > trim
      inputs: getInputs(component).length,
      type: "algorithm", // scraping basic util lib file
      typeNum: 400, //designated for basic
      isFavorite: false, // default false
   };
});

const reversedObjs = componentObjs.reverse();

const orderedObjs = [];
for (let i = 0; i < reversedObjs.length; i++) {
   // add notes from video
   const obj = reversedObjs[i];
   obj.order = obj.typeNum + i;
   orderedObjs.push(obj);
}

console.log(orderedObjs);

const targetFile = "./JSON/algorithm.json";

fs.writeFileSync(targetFile, JSON.stringify(orderedObjs));
