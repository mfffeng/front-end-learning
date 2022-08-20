const container = document.querySelector('#container');
const paragraph = document.createElement('p');

paragraph.classList.add('paragraph');
paragraph.style.color = 'red';
paragraph.textContent = 'Hey I\'m red!';
container.appendChild(paragraph);

const divison = document.createElement('div');
divison.style.border = '1px solid black';
container.appendChild(divison);

const nestedH1 = document.createElement('h1');
nestedH1.textContent = 'I\'m in a divison!';
divison.appendChild(nestedH1);