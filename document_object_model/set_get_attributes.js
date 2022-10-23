
//Az elementen belüli elementeket is le lehet kérdezni
const examplediv = document.querySelector('.examplediv');
console.log(examplediv.querySelector('.error').innerHTML);

const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href','https://www.youtube.com');
link.innerText = "Youtube";

const msg = document.querySelector('.error');

console.log(msg.getAttribute('class'));
msg.setAttribute('class', 'success');
msg.setAttribute('style', 'color: red;');