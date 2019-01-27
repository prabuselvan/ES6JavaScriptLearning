// function sum(x,y) {
// console.log(arguments);
// console.log(arguments.length);

//     return x  +y;
// }

// var temp =sum(10,20);

// console.log(temp);

// function foo () {

// }

// var test = foo();
// console.log(test);


function sumAll () {
    var sum =0;


    for(var i=0; i<arguments.length; i++) {
        sum+=arguments[i];
    }
    return sum;
}

var sam = sumAll(10,20,30);

console.log(sam);
console.log(typeof(sumAll));
var temp =[];
console.log(typeof(temp));
console.log(Array.isArray(temp));

var f = function g () {
    return 100;
}

// console.log(f());

console.log(typeof(g));
var si= (function (x) {
    delete x
    return x;
})(12);

console.log(si);


// var xx=1, yy=zz=typeof(abc);

// abc;


// var foo =  {
//     bar : function ( ) {
//         return this.baz;
//     },
//     baz : 1
// }

// (function() {
//     return typeof arguments[0]();
// })(foo.bar);

var foo = {
    bar: function() { return this.baz; },
    baz: 1
  };
  (function(){
    return typeof arguments[0]();
  })(foo.bar);
