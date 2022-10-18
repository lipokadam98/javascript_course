const magic= () => new Date();

const myConcat = (arr1,arr2)=> arr1.concat(arr2);

console.log(myConcat([1,2],[3,4]));


const realNumberArray = [1,2,3,4,-1,-2,4.24,23.2,-8.8];

/*const squareList = (arr) =>{
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map )

};*/

//rest operator ...args
const sum = (function (){
return function sum(...args){
    return args.reduce((a,b)=> a+b,0);
}
})();

console.log(sum(1,2,3));


