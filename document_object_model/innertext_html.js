const para = document.querySelector('p');
para.innerText = "Changed text";
console.log(para.innerText);

const paras = document.querySelectorAll('p');

paras.forEach(item=>{ 
    item.innerText = ' new text';
    console.log(item.innerText);
});

const content = document.querySelector('.content');

content.innerHTML += `<br><h2>This is an h2 ${para.innerHTML}</h2>`;

console.log(content.innerHTML);

const people = [
    {
        name: 'John',
        age: 30
    },
    {
        name: 'Steve',
        age: 25
    }
];

people.forEach(item=>{
    content.innerHTML += `<p>${item.name} age: ${item.age}</p>`;
});