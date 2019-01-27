let val;

// Number to string

val=String(5);
val=String(5+5)

// Bool To string

val= String(true);

// Date to String 
val= String( new Date());

val= String([1,2,3,4])

// another way toString

val=(5).toString();

// String to Number
val =Number('5');
val=Number(true);
val=Number(false);
val=Number(null);
val=Number('Prabu');
val=Number([1,2.3]);


val=parseInt('Prabu');

val=parseInt('100.40');

val =parseFloat('100.2012001');



console.log(val);
console.log(typeof(val));
// console.log(val.length); // undefined

console.log(val.toFixed(4)); // Fixed will work only in numbers


const val1= Number('5');
const val2=10;

const sum = val1 + val2;
console.log(sum);

console.log(typeof(sum));





