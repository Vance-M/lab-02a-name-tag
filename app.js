console.log('Hello World! How are you?')

const newname = document.getElementById('little-input');
const button1 = document.getElementById('little-button');
const oldname = document.getElementById('little-name');

console.log();
console.log();
console.log();

button1.addEventListener('click', () => {
    oldname.textContent = newname.value
    newname.value = ""
 })


const tagcolor = document.getElementById('nametag');
const buttonred = document.getElementById('red-button');
const buttonblue = document.getElementById('blue-button');
const buttonbest = document.getElementById('random-button');

buttonred.addEventListener('click', () => {
    tagcolor.style.backgroundColor = "red";
 })

 buttonblue.addEventListener('click', () => {
    tagcolor.style.backgroundColor = "blue";
 })

 buttonbest.addEventListener('click', () => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    tagcolor.style.backgroundColor = '#' + randomColor;
 })








