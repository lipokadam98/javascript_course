var myArray = [];

var i = 0;
while (i < 5) {
  myArray.push(i);
  i++;
}

console.log(myArray);

//for loop

var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

for (var i = 0; i < 10; i += 2) {
  console.log(i);
}

for (var i = 10; i > 0; i -= 2) {
  console.log(i);
}

var ourArr = [9, 10, 2, 4, 5];
let ourTotals = 0;
for (var i = 0; i < ourArr.length; i++) {
  ourTotals += ourArr[i];
}

console.log(ourTotals);

function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
}

var product = multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6],
]);

var contacts = [
  { name: "Bob", email: "bob@gmail.com" },
  { name: "Alice", email: "alice@gmail.com" },
];

function lookupProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].name === name) {
      return contacts[i][prop] || "no such property";
    }
  }
  return "no such contact";
}

var data = lookupProfile("Bob","email");

console.log(data);
