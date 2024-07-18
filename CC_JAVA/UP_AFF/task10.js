//kekim10
//Random Number Sorting Algorithm


var arrNum =[];
const size = 10;
const max = 100;

for(var i = 0; i<size; i++){
    var randomNum = Math.floor(Math.random()*max)+1;
                     //plus one to avoid value 0 because our minimum is 1
    arrNum.push(randomNum);
}

console.log(`Input array is:`);
console.log(arrNum);

var arr1=[];
var arr2=[];
var arr3=[];

//Conditions that check for divisibility
for(var j=0; j<size; j++){
    if (arrNum[j]%2===0 && arrNum[j]%5===0){
        arr1.push(arrNum[j])
    }

    if(arrNum[j]%2 === 0){
        arr2.push(arrNum[j])

    }

    if(arrNum[j]%5===0){
        arr3.push(arrNum[j])
    }
}

    console.log(`Elements that are divisible by both 2 and 5 are:`);
    console.log(arr2);

    console.log(`Elements that are divisible by 2 only are:`);
    console.log(arr2);

    console.log(`Elements that are divisible by 5 only are:`);
    console.log(arr3);