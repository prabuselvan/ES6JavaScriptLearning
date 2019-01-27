// var x;
// console.log(x);

// console.log(undefined);

// var y = undefined;

// console.log(y);

// var obj = {
//     x:1
// };

// console.log(obj.x);
// obj=null;
// console.log(typeof undefined);
// console.log(typeof null);

var days = ['Sunday','Monday','Tuesday','Wednesday'];
days[4]='Thursday';
// console.log(days[4]);
days[6] = "Saturday";
console.log(days);
console.log(days.length);

// arrays can have mixed datatypes

var arr = [0, false,'helo'];

console.log('arr is ', arr);

function foo () {
    for (var i=0; i<arr.length; i++) {
        console.log(arr[i]);  
    }
};

foo();





