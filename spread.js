const max = Math.max(12, 85, 999, 78);
// console.log(max);

const numbers = [12, 85, 999, 78];
// console.log(numbers);
const largest = Math.max(...numbers);
// console.log(...numbers);
// console.log(largest);

const numbers2 = [...numbers];
numbers.push(55);
console.log(numbers);
console.log(numbers2);

const numbers3 = [1,21,...numbers, 555, 123];
console.log(numbers3);