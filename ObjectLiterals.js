const person = {
    firstName : 'Prabu',
    lastName: 'Selvan',
    age: 29,
    email : 'prabu.selvan@gmail.com',
    hobbies: [ 'music' , 'movies', ],
    address: {
            city: 'Miami',
            state: 'FL'
    },
    getDOB : function ( ) {
        return 2019 - this.age;
    }
}

console.log(person.firstName);
console.log(person.hobbies[0]);
console.log('DOB is ', person.getDOB());
console.log(person.hobbies[1]);

// Arrays of Objects

const people = [ 
    {name: 'John', age: 30},
    {name: 'Mike', age: 10}
];

for (let i=0; i<people.length; i++) {
    console.log(people[i].name);
    
}






