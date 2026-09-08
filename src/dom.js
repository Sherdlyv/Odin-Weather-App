import './style.css';


const container = document.createElement('div');
container.classList.add("container");

const title = document.createElement('h1');
title.id = 'title';

const myInput = document.createElement('input');
myInput.id = 'myInput';

myInput.type = 'text';
myInput.placeholder = 'NY USA';

const btnSearch = document.createElement('button');
btnSearch.textContent = 'Search';

container.appendChild(title);
container.appendChild(myInput);
container.appendChild(btnSearch);
document.body.appendChild(container);


