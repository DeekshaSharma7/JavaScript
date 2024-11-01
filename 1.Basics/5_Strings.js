const name = "deeksha"
const repoCount = 20

// console.log(name + repoCount + "value");

console.log(`Hello, My name is ${name} and My Repo Count is ${repoCount}`);

const gameName = new String('jyoti');

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2)); 
//console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
//console.log(newString);

const anotherString = gameName.slice(-4,2);
//console.log(anotherString);

const newString1 = "   deeksha    ";
console.log(newString1);
console.log(newString1.trim);

const url = "https://deekshasharma.com/deeksha%20sharma"
console.log(url.replace('%20', '-'));
console.log(url.includes('sunder'));

console.log(gameName.split('-'))