//Task 1: You have an odd array. now convert this array into an even array.(using for loop & map method)

// Using for loop
const oddNumbers = [1, 3, 5, 7, 9];
function makeEven(){
    for(let i = 0; i<oddNumbers.length; i++){
        oddNumbers[i] = oddNumbers[i] + 1;
    }
    return oddNumbers;
}
console.log(makeEven());
//Using map
const oddNumbers2 = [3, 1, 11, 13, 9];
const evenNumbers = oddNumbers2.map(n => n+1);
console.log(evenNumbers);

//Task 2: 