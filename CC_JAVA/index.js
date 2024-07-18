/*console.log("HELLO")
console.log("WORLD")

window.alert("lmao")

*/

var arrNum =[];
const size = 10;
const max = 100;

for(var i = 0; i<size; i++){
    var randomNum = Math.floor(Math.random()*max)+1;
                     //plus one to avoid value 0 because our minimum is 1
                     console.log(randomNum);
     arrNum.push = randomNum;
}

console.log(arrNum);


