const fname = "Prabu";
const lname= "Selvan";

const str= 'Hello there my name is Prabu';
let val;
// concatenation

val= fname + ' '+ lname;

// Append

val="Prabu";

val+= ' Selvan';


console.log(val);


// Escaping

val = 'That\'s  awesome, I can\'t wait';

console.log(val);
// length is a property not a method
console.log(fname.length);

console.log(fname.concat('  ', lname));

console.log(fname.toUpperCase());
console.log(fname.toLowerCase());

console.log(fname[0]);

// index of
// if a character is not found returns -1
val=fname.indexOf('P');
val=fname.lastIndexOf('P')

val=fname.charAt('0');

// get the last char

val = fname.charAt(fname.length-1);

console.log(val);

// substring
val= fname.substring(0,4);

// val=fname.slice(0,-1);
// val=fname.slice(-1);

val=str.split(' ');

val=str.replace('Prabu','Selvan');

val=str.includes('Prabu');
console.log(val);








