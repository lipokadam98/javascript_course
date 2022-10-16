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

var removedFromArray = myArray2.pop();

console.log(removedFromArray);

//a shift() function kiszedi az első elemet az arrayből

multiArray.shift();


//unshift() hasonló a push funcionhöz csak ez az első helyre ad hozzá egy elemet
var unshiftArray = ["first", "second", "third", "fourth", "fifth",];
unshiftArray.shift();

console.log(unshiftArray);

unshiftArray.unshift("first");

console.log(unshiftArray);


var shoppingList = [["cereal", 3],["milk",2],["bananas",3],["juice",2],["eggs",12]];
