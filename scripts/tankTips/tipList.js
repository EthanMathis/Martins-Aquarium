import { getTips } from "./tipData.js";
import { tip } from "./tip.js";

/** Steps
  1. get the array of tips
  2. get a reference to the location on the DOM where you want to display the list
  3. declare a variable to hold the tankTip HTML representations
  3. loop over the array of tankTips and for each one, 
     invoke the tankTip component which returns HTML representation  
  4. Finally set the DOM equal to the variable containing the fish HTML representations    
**/

export const tipList = () => {
    
    const tipsElement = document.querySelector("#tipList");

    const allTips = getTips();

    let tipsHTMLRep = "";

    for (const singleTip of allTips) {
        tipsHTMLRep += tip(singleTip);
    };
    tipsElement.innerHTML += `
    ${tipsHTMLRep}
    `

};