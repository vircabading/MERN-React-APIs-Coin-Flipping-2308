//////////////////////////////////////////////
//  COIN FLIPPING APPLICATION
//////////////////////////////////////////////

const tossCoin = () => {
    return Math.random() > 0.5 ? "heads" : "tails";
}

const fiveHeadsSync = () => {
    let headsCount = 0;
    let attempts = 0;
    let output = "";
    while (headsCount < 5) {
        attempts++;
        let result = tossCoin();
        output += `${result} `;
        (result === "heads") ?
            headsCount++ :
            headsCount = 0;
        if ( attempts % 10 === 0 ) {
            output += "\n";
        }
    }
    return `${output}\n\nIt took ${attempts} tries to flip five "heads"`;
}

console.log("//////////////////////////////////////");
console.log("//  Coin Flipping Application");
console.log("//////////////////////////////////////\n");

console.log(fiveHeadsSync());
console.log("This is run after the fiveHeadsSync function completes");
