//Task 1:
// You have an odd array. now convert this array into an even array.(using for loop & map method)

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
// You are given an array say: [33, 50, 79, 78, 90, 101, 30]. Now return/get all the elements
// which are divisible by 10 using array.filter() method. Then again do the same task using array.find() method.

//Using filter method
const numbers = [33, 50, 79, 78, 90, 101, 30];
const divisibleByTen = numbers.filter(n => n % 10===0)
console.log(divisibleByTen);

// using find method
const divisibleByTen2 = numbers.find(n => n % 10===0)
console.log(divisibleByTen2);