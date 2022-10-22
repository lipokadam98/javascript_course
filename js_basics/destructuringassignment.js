{
    let voxel = {x: 3.6, y: 7.4, z: 6.54};

let x = voxel.x;
let y = voxel.y;
let z = voxel.z;


//destructuring syntax
//megadjuk az objectben lévő propertyt utána pedig azt amelyben tárolni szeretnénk
const {x: a, y: b, z: c} = voxel;

console.log(a);
}
const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
}

function getTempOfTmrw(avgTemperatures){
    "use strict";

    const {tomorrow: tempOfTomorrow}= avgTemperatures;
    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));


//Destructuring from nested objects

const LOCAL_FORECAST = {
    today: {min: 72, max: 83},
    tomorrow: {min: 73.3, max: 84.6}
};


function getMaxOfTmrw(forecast){
    "use strict";

    const {tomorrow: {max: maxOfTomorrow}}= forecast;
    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));

//Destructuring arrays
//Ha nem sorrendben akarjuk kinyerni az értéket és ha üres helyen
//nem adunk változót akkor azokat nem menti le
const [z,x,,,y] = [1,2,3,4,5,6,7,8,9,10];

console.log(z,x,y)


let a = 8, b = 6;

(()=>{

    "use strict";
    [a,b] = [b,a];
})();

console.log(a);
console.log(b);

const source = [1,2,3,4,5,6,7,8,9,10];

function removeFirstTwo(list){

    const [, , ...arr] = list;

    return arr;
}

const arr = removeFirstTwo(source);

console.log(arr);
console.log(source);    


//Object as a parameter destructuring
const stats = {
    max: 56.78,
    median: 25,
    min: -6
};

const half = (()=>{
    return function half({max,min}){
        return (max + min) / 2.0;
    }
})();

console.log(stats);
console.log(half(stats));

const person = {
    name: "John",
    surname: "Doe",
    age: 25,
    height: 3.5
}

//ALTGR+7 backtick template literals

const greeting = `Hello ${person.name} 
I am ${person.surname} and ${person.age} old`;

console.log(greeting);

const result = {
    success: ["max-length", "no-amd","prefer-arrow-functions"],
    failure: ["no-var","var-on-top","linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
}

function makeList(list) {
    const resultDisplayArray = [];

    for (let i = 0; i < list.length; i++) {
        resultDisplayArray.push(`<li class="text-warning">${list[i]}</li>`);
    }
    return resultDisplayArray;
}


const resultArray = makeList(result.failure);

console.log(resultArray);
