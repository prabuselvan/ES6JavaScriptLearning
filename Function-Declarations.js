// Function declaration
// function greet(fname, lname) {

//     if(typeof fname === 'undefined') { fname= 'Prabu'}
//     if ( typeof lname=== 'undefined') {lname= 'Selvan'}
//     return 'Before ES 6 ' + fname + ' ' + lname;
// }


// function greet(fname = 'John' , lname='Doe') {
//     return ` In Es 6   ${fname} ,  ${lname}`
// }


// console.log(greet());



// function expression 
// const square = function (x= 4) {
//     return x*x;
// }

// console.log(square());

// Immediately Invokable Function expression

(function (name) {
    console.log('Hello ', name);
    
})("Prabu");

// Property methods

const todo = {
    add: function ( ) {
        console.log('Add Todo');
    },
    edit: function (id ) {
        console.log('Edit Todo ', id);
    }
}

todo.add();
todo.edit(100);
todo.delete = function () {
    console.log('Delete Todo');
    
}
todo.delete();


