var name = 'Prabu';
name="Selvan";

// var  and let can be declared wiht out initializing

console.log(name);


var firstName;

console.log(firstName);

firstName="Steven";

console.log(firstName);

// const caanot be declared with out initializing

const temp ='Prabu'


const Person = {
    name :'Prabu',
    age: 20
}

// though we declared with const we can change the value of it
Person.name="Selvan";

console.log(Person);

const numbers= [1,2,3,4];

numbers.push(44);

//  we cannot reintialize the same array second time

numbers = [1,2,3,4,5,6,7];
console.log(numbers);;
