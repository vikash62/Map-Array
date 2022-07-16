let numberArray = [3, 5, -8];
let sum = 0;
for(i=0; i<numberArray.length; i++) {
    sum += numberArray[i];
}

if(sum == 0) {
    console.log("Sum of 3 Integer is ZERO")
} else {
    console.log("Sum of 3 Integer is Not ZERO");
}