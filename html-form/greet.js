const myName = document.querySelector('#name');
const btn = document.querySelector('.submit');
const output = document.querySelector('.greeting');

btn.addEventListener('click', () => {
  output.innerText = `Hello ${myName.value}`;
})