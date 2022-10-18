function randomFraction(){
    return Math.random();
}

//A random number generator mindig 0 és 1 közötti számot ad vissza

console.log(randomFraction());

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum(){
    return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum());


function ourRandomRange(ourMin,ourMax){
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

console.log(ourRandomRange(1,10));

function convertToInteger(str){
    //Meg lehet adni a számrendszert is amibe konvertálja a számot
 return parseInt(str,2);
}

convertToInteger("10011");


//Ternary operator
function checkEqual(a,b){
    return a === b ? true : false;
}

function checkSign(num){
    return num > 0? "positive" : num < 0 ? "negative" : "zero";
}

console.log(checkSign(-1));
