function areaOfCircle(radius, color) {
    console.log(this);  // this refers to the window object
    console.log(color);
    return Math.PI *radius * radius;
    
}


areaOfCircle();


var obj = {
    x: 1
}

console.log(obj instanceof Object);

console.log(typeof(areaOfCircle));

console.log(areaOfCircle instanceof Object);

areaOfCircle.formula = 'PI * r^2';

console.log(areaOfCircle.formula);

areaOfCircle.foo = function () {
    console.log('Area of circle is given by : ', this.formula);
    
};

console.log(areaOfCircle);

var result1= areaOfCircle(100);
var result2 = areaOfCircle.call('Hey man', 200);
console.log(result1);


console.log(result2);

var result3 = areaOfCircle.apply("Welcome", [200,200]);
console.log(result3);


function main () {
    console.log('This is outer method');
    
    return function testsample() {
        console.log('This is inner method');
        
    }
}

var a1 =main();
console.log(a1);





