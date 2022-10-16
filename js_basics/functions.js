
function ourReusableFunction(){
    console.log("Heyya, World");
}

ourReusableFunction();


function reusableFunction(){
    console.log("Hi, World");
}

reusableFunction();

function ourFunctionWithArgs(a,b){
    console.log(a - b);
}

ourFunctionWithArgs(10,5);

function functionWithArgs(a,b){
    console.log(a + b);
}

functionWithArgs(10,5);


var myGlobal = 10;

function fun1(){
    //Ha egy változónak nem adjuk meg hogy var 
    //akkor az a változó automatikusan elérhető globálisan
    oopsGlobal = 5;
}

function fun2(){

    var output = "";
    if(typeof myGlobal != "undefined"){
        output += "myGlobal: "+myGlobal;
    }
    if(typeof oopsGlobal != "undefined"){
        output += " oopsGlobal: "+oopsGlobal;
    }
    console.log(output);
}

fun1();
fun2();

function myLocalScope(){
    var myVar = 5;
    console.log(myVar);
}

myLocalScope();

//console.log(myVar);

//Lehet olyan hogy a local és global változó neve ugyanaz
//ilyenkor a local variable felülvágja a global változó értékét
//de csak az adott functionon belül, magát a változó értékét nem változtatja meg
//csak akkor ha globalként hivatkozunk rá

var outerWear = "T-shirt";

function myOutfit(){
    var outerWear = "Sweater";

    return outerWear;
}

console.log(myOutfit());

console.log(outerWear);


function minusSeven(num){
    return num - 7;
}

console.log(minusSeven(10));

function timesFive(num){
    return num * 5;
}

console.log(timesFive(5));


var sum = 0;

function addThree(){
    sum = sum + 3;
}

function addFive(){
    sum = sum + 5;
}

function nextInLine(arr,item){
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: "+JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After: "+JSON.stringify(testArr));