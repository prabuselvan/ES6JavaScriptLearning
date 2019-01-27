// primitive datatypes ==> stored on the call stack
// accessed by the value


// reference data types

// Accessed by the reference
// Objects are stored in heap
// Pointer to the location in memory

const name ="Prabu"
const age=30;
const car= null; // object
console.log(name , typeof(name), typeof(age), typeof(car));

var  test;
console.log(typeof(test));

// Reference Types

// Array
const  hobbies= ['Movies', 'Music'];

console.log(typeof(hobbies));

// Object literal

const address= {
    city : 'Boston',
    state: 'MA'
}

console.log(typeof(address));

const date=  new Date();

console.log('Todays date is', date);

console.log(typeof(date));





