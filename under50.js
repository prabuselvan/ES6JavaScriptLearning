let val;
var newArray= [10,75,50,51,52,53,1,2,3];

function under50(num) {
    return num < 50;
}

val= newArray.find(under50);

console.log(val);


