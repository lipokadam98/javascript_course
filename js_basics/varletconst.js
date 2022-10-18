//A vart használva 2 változó neve is lehet ugyanaz és nem hiba a 
//let használatával viszont hibának veszi
/*
The purpose of "use strict" is to indicate that the code should be executed in "strict mode".

With strict mode, you can not, for example, use undeclared variables.
*/
"use strict";
let catName = "asdasd";

catName = "ssss";


function checkScope(){
    var i = "function scope";

    if(true){
        i = "block scope";
    }
    return i;
}

checkScope();

//const variable is like let but its read only

const array = [5, 6, 7, 8, 9];
//Hiába const az array viszont a mutation ellen nem védett
function editInPlace(){
    "use strict";
    //s = [2, 3, 4, 5, 6, 7];
    array[0] = 2;
    array[1] = 3;
    array[2] = 4;
}

editInPlace();

console.log(array);

function freezeObject(){
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14,
    };

    //Az Object.freeze megakadályozza a mutationt
    Object.freeze(MATH_CONSTANTS);
    
    try{
        MATH_CONSTANTS.PI = 99;
    }catch(ex){
        console.log(ex);
    }

    return MATH_CONSTANTS.PI;
}

const PI = freezeObject();

console.log(PI);

