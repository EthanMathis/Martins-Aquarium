import { fish } from "./fishCard.js";
import { getFish, } from "./fishData.js";


export const fishList = () => {

    // Get a reference to the location on the DOM you want to display the list of fish
    const contentElement = document.querySelector("#fishList");
    // Get the fish array
    const fishes = getFish();
    // Declare a variable to hold on to the fish HTML representation
    let fishHTMLRepresentation = "";
    // Loop over the array of fish
    for (const oneThingFromTheSea of fishes) {
        fishHTMLRepresentation += fish(oneThingFromTheSea);
    };
    // Set the dom equal to the variable containing the fish html representations
    contentElement.innerHTML += `
    ${fishHTMLRepresentation}
    `
};
 
