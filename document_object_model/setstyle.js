const title = document.querySelector('h1');

//Ha így állítunk stylet akkor felül vágja az eddig beállítottat is
//title.setAttribute('style','margin: 50px;');

console.log(title.style.color);

title.style.margin = '50px';
title.style.color = 'crimson';
title.style.fontSize = '50px';
title.style.margin = '';
