
/**
Kiszedi az első p taget illetve class alapján 
is tud kiszedni elementeket .error
Illetve a css-ben megismert szintaktikát alkalmazva
az adott element alatt lévő child alapján
is meg lehet találni az elementet div .error 
a div alatt lévő .error class-al rendelkezőt adja vissza
 */
const para = document.querySelector('div .error');
//console.log(para);

/**
 * A querySelectorAll több elementet is visszaad nem csak az első
 * előfordulást ha mondjuk több p tag is van az oldalon
 * NodeListet ad vissza
 *  */
const elements = document.querySelectorAll('p');

//console.log(elements[2]);

/*elements.forEach(item=>{
    console.log(item);
});*/

const errors = document.querySelectorAll('.error');

//console.log(errors);

//get an element by ID

const title = document.getElementById('page-title');

//console.log(title);

//get elements by their class name
//https://www.w3schools.com/js/js_htmldom_nodelist.asp
//HtmlCollection-t ad vissza
//for eachet nem lehet használni HtmlCollection esetén
const errorsClassName = document.getElementsByClassName("error");

console.log(errorsClassName);
console.log(errorsClassName[0]);

//get elements by their tag name

const ptags = document.getElementsByTagName('p');

console.log(ptags);

//Általában a querySelector illetve querySelectorAll elég mindenre a mindennapokban