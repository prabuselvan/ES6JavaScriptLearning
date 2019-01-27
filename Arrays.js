const numbers1 = [1,2,3,4,5,100];
const numbers2 = new Array(5,4,3,2,1);


console.log('numbers 1 ' , numbers1);

console.log('numbers 2 ', numbers2);

const fruits = ['Oranges', 'Pear','Apple','Banana',];

console.log(fruits);

const mixed = [11,'Prabu',true, null, undefined, {a:1, b:2}, new Date()];

let val; 
console.log(mixed);
console.log(val);

// Array Length 

console.log(mixed.length);

console.log('isArray ', Array.isArray(numbers1));

console.log(numbers1.indexOf(100));

// Adding values to the array

// numbers1.push(200); // will always add to the last element

numbers1.unshift(400); // add element in the front of array

// remove the first element from the array

numbers1.pop();

numbers1.shift();

console.log(numbers1);

numbers1.splice(0,2);

numbers1.reverse();

val = numbers1.concat(numbers2);
console.log(val);

val= fruits.sort();

console.log(val);


var newArray = [-1,12,1000,234,435,3,23,22,2,2,1,10];

// val = newArray.sort();

// we have to use the compare function (descending order)
// val= newArray.sort((a, b)=> {
//     return b - a;
// })

// ascending order
// val = newArray.sort((a, b)=> {
//     return a -b;
// })

// find function 

function under50 (num) {
    return num < 50;
}

val = newArray.find(under50)

console.log('Under 50 is ', val);





