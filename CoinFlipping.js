//////////////////////////////////////////////
//  COIN FLIPPING APPLICATION
//////////////////////////////////////////////

const tossCoin = () => {
    return Math.random() > 0.5 ? "heads" : "tails";
}

const fiveHeadsASync = new Promise( (resolve, reject) => {
    let headsCount = 0;
    let attempts = 1;
    let output = "";
    while ((headsCount < 5) && (attempts < 101)) {
        let result = tossCoin();
        output += `${result} `;
        (result === "heads") ?
        headsCount++ :
        headsCount = 0;
        if (attempts % 10 === 0) {
            output += "\n";
        }
        attempts++;
    } 
    if (attempts < 100) {
        resolve (`${output}\n\nIt took ${attempts} tries to flip five "heads"`);
    } else {
        reject (`${output}\n\nCould not get 5 Heads in a row after 100 attempts`);
    }
});

console.log("//////////////////////////////////////");
console.log("//  Coin Flipping Application");
console.log("//////////////////////////////////////\n");

fiveHeadsASync
    .then(res => console.log(res))
    .catch(err => console.log(err));

console.log("**********************************");
console.log("When does this run now?");
console.log("**********************************\n");