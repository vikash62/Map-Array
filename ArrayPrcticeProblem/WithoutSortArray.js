//Que 1: Write a program in the following steps
// a. Generates 10 Random 3 Digit number.
// b. Store this random numbers into a array.
// c. Then find the 2nd largest and the 2nd smallest element without sorting the array.

let threeDigitNumbersArr = new Array();

for(let i =0;i<10;i++)
{
    let number = Math.floor(Math.random()*999)+100;
    threeDigitNumbersArr.push(number);
}
console.log(threeDigitNumbersArr);

let secondLargest = threeDigitNumbersArr[0];
let largest = threeDigitNumbersArr[0];
let secondSmallest = threeDigitNumbersArr[0];
let smallest = threeDigitNumbersArr[0];

for(let i =1;i<threeDigitNumbersArr.length;i++)
{
    if(secondLargest<threeDigitNumbersArr[i])
    {
        if(largest<threeDigitNumbersArr[i])
        {
            secondLargest = largest;
            largest = threeDigitNumbersArr[i] 
        }
        else
        {
            secondLargest = threeDigitNumbersArr[i];
        }
    }

    if(secondSmallest>threeDigitNumbersArr[i])
    {
        if(smallest>threeDigitNumbersArr[i])
        {
            secondSmallest = smallest;
            smallest = threeDigitNumbersArr[i] 
        }
        else
        {
            secondSmallest = threeDigitNumbersArr[i];
        }
    }
}

console.log("Second smallest value is : "+secondSmallest);
console.log("Second largest value is : "+secondLargest);

// Sort the array and find second largest & second smallest numbers

let sortedArray = threeDigitNumbersArr.sort();

console.log("Second smallest value using array is : "+sortedArray[1]);
console.log("Second largest value using array is : "+sortedArray[sortedArray.length-2]);