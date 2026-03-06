const numbers = [1, 2, 3, 4, 5];

// iterates through the array
numbers.forEach(n => console.log(n));

// "transforms" the array and returns a new array
const numDouble = numbers.map(n => n * 2);
console.log(numDouble);


// filters with a condition and return a new array 
const numFilter = numbers.filter(n => n > 3);
console.log(numFilter);


// reduces the array down to one value (1+2+3+4+5)
const sumOfNum = numbers.reduce((total, n) => total + n, 0);
console.log(sumOfNum);


// sorts the array from smallest to largest (if b - a it does largest to smallest)
const numSorted = [3, 1, 4, 1, 5].sort((a, b) => a - b);
console.log(numSorted);

// returns the first item that matches the criteria
const numFind = numbers.find(n => n > 3);
console.log(numFind);

// returns the index of the first item
const numIndex = numbers.indexOf(3);
console.log(numIndex);