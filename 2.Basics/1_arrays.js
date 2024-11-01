// array

const myArr = [0, 1, 2, 3,4,5,true, "deeksha"];

//console.log(myArr[0]);
//console.log(myArr[6]);

const myHeros = ["shaktiman", "naag"];
//console.log(myHeros[0]);
//myArr.push(6);
///myArr.push(8);
//myArr.pop(4);

// myArr.unshift(9);
// myArr.shift()

// console.log()
// console.log(myArr);

// console.log(myArr.includes(9));

// console.log(myArr.indexOf(4));

// const newArr = myArr.join()
// console.log(myArr);

//****Slice  */

console.log("A", myArr); 
const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3);
console.log("C", myArr);
console.log(myn2);
