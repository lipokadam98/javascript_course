function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }

  return "Not Equal";
}

console.log(testEqual(10));

function testStrict(val) {
  if (val) {
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

/**
 * A sima == type konverziót alkalmaz
 * viszont a === nem
 * 3 === 3 true
 * 3 === '3' false
 *
 * viszont
 *
 * 3 == 3 true
 * 3 == '3' true
 */

function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }

  return "Not equal";
}

console.log(compareEquality(3, "3"));

function testNotEqual(val) {
  if (val != 99) {
    return "Not equal";
  }

  return "Equal";
}

console.log(testNotEqual("99"));


//Működését tekintve olyan mint a === egyenlőség jel
function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not equal";
  }

  return "Equal";
}


console.log(testStrictNotEqual(10));


function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }

  if (val > 10) {
    return "Over 10";
  }

  return "10 or Under";
}


console.log(testGreaterThan(1000));

function testGreaterOrEqual(val) {
  if (val >= 100) {
    return "Over 100";
  }

  if (val >= 10) {
    return "Over 10";
  }

  return "10 or Under";
}

console.log(testGreaterOrEqual(1000));

function testLogicalAnd(val) {
 if (val <= 50 && val >= 25) {
     return "Yes";
   }
 
   return "No";

}

console.log(testLogicalAnd(25));


function ifElseChaining(num) {
  if(num < 5){
    return "Tiny";
  }else if(num < 10){
    return "Small";
  }else if(num < 15){
    return "Medium";
  }else if(num < 20){
    return "Large";
  }else {
    return "Huge";
  }
}

console.log(ifElseChaining(20));

