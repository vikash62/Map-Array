//Que 1: Write a program in the following steps
//a. Roll a die and find the number between 1 to 6
// b. Repeat the Die roll and find the result each time
// c. Store the result in a dictionary
// d. Repeat till any one of the number has reached 10 times
// e. Find the number that reached maximum times and the one that was for minimum times

let dieRollMap = new Map();
let flag = true;
while(flag) {
    let numOnDie = Math.floor(Math.random() * 6) + 1;
    if (dieRollMap.has(numOnDie)) {
        let count = dieRollMap.get(numOnDie);
        count++;
        dieRollMap.set(numOnDie, count);
    }
    else {
        dieRollMap.set(numOnDie, 1);
    }

    for (let key of dieRollMap.keys()) {
        if(dieRollMap.get(key) == 10) {
            flag = false;
            break;
        }
    }
}

let numThatAppearedMaxTimes;
let numThatAppearedLeast;
let minimumCountOfParticularNumber = 100;
console.log(dieRollMap);
for (let [key, value] of dieRollMap) {
    if(value == 10) {
        numThatAppearedMaxTimes = key;
    }
    
    if(value < minimumCountOfParticularNumber){
        minimumCountOfParticularNumber = value;
        numThatAppearedLeast = key;
    }
}
console.log("Number that appeared 10 or Maximum times : " + numThatAppearedMaxTimes);
console.log("Number That appeared Least or Minimum times: " + numThatAppearedLeast);