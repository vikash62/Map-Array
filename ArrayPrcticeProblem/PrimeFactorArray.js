
const prompt = require("prompt-sync") ()
let primeFactorArr = new Array();
let n = parseInt(prompt("Enter the Number : "))
function primeFactors(n)
{
     var array=[];
    while (n % 2 == 0)
    {
        console.log(2 + " ");
        n = Math.floor(n / 2);
    }
 
    for(let i = 3;i <= Math.floor(Math.sqrt(n));
            i = i + 2)
    {
         
        while (n % i == 0)
        {
            
            array.push(i);
            n = Math.floor(n / i);
        }
    }
 
    if (n > 2){
        array.push(n);
    }
    
    console.log(array);

}
 
primeFactors(n);