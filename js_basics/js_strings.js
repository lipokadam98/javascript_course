var escapingString = "adasdasdas \"dsads\" dasdasd ";

console.log(escapingString);

var escapingStringSingle = `adasdasdas "dsads" dasdasd `;

console.log(escapingStringSingle);


var escapingStringSingle2 = 'adasdasdas "dsads" dasdasd ';

//Escape characters in JS
/***
    \'
    \"
    \\
    \n
    \r
    \t
    \b
    \f
 * 
 */

var myStr = "FirstLine \n\t\\SecondLine\n\ThirdLine";
console.log(myStr);

var outStr = "I come first. " + "I come second.";

var myStr = "This is the start. " + "This is the end";
console.log(myStr);

myStr += outStr;

console.log(myStr);

var concatStr = "asdasdasd" + outStr + "concated";

console.log(concatStr);

console.log(myStr.length);

let firstLetterinMystr = myStr[0];

console.log(firstLetterinMystr);

//Strings are immutable just like in java

//this will create an error
//myStr[0] = "a";

//finding last character in string
let lastLetterInString = myStr[myStr.length - 1];

console.log(lastLetterInString);
