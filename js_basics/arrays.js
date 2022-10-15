//Az array itemek bármilyenek lehetnek
var ourArray = ["John", 23];

var myArray = [];

//Nested arrays

var multiArray = [["The universe",42],["everything",101010]];

var myArray2 = [["Bulls",23]];

let firstElement = multiArray[0];


console.log(firstElement);

var changedArray = [10,20,30];

changedArray[1] = 2;
console.log(changedArray);

console.log(myArray2[0][1]);

myArray2.push(['dog',3]);

console.log(JSON.stringify(myArray2));

