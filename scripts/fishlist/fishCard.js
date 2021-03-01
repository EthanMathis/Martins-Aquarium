export const fish = (fishObj) => {
    let waterType = "";
    if (fishObj.saltWater) {
        waterType = "Salt Water Fish"
    } else {
        waterType = "Fresh Water Fish"
    }
    return (
        `<article class="fish-card">
    <div><img class="fish-image" src="images/${fishObj.image}" /></div>
    <h3 class="fish-name">${fishObj.name}<small>${waterType}</small></h3>
    <ul>
        <li class="fish-details">${fishObj.species}</li>
        <li class="fish-details">Length: ${fishObj.inches}</li>
        <li class="fish-details">Found: ${fishObj.harvestLocation}</li>
        <li class="fish-details">Diet: ${fishObj.diet}</li>
    </ul>
    </article>`
    )
}