// types of datatype --- primitive and non-primitive

// Primitive --

// ? types : String, Number, boolean, null, undefined, Symbol, BigInt
//  Javascript is a dynamic and weakly typed programming language. It means that Javascript can hold values with different data types in the same variable during runtime [dynamic], and it can perform operations between different data types without explicitly converting them before [weakly].

const score = 100
const scoreValue = 100.33

const isLogin = false
const outsideTemp = null
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123')

//console.log(id === anotherId);

const bigNumber = 6524568532103654786521n

// Reference type (Non-primitive)

//Array, Objects, Functions

const heros = ["aa", " bb", "cc"]
let myObj ={
    name:"deeksha", 
    age: 22,
}

const myFunc = function(){
    console.log("Heloo! World");
}

// console.log(typeof  scoreValue);
// console.log(typeof outsideTemp);
// console.log(typeof myFunc);
// console.log(typeof heroes);
// console.log(typeof anotherId);

// **********************************************************

//Stack(Primitive), Heap(Non-primitive)
//stack m copy milta h - numbers, booleans, etc
//Heap m reference milta h, reference means changes are made in the original value.

let myName = "deekshaSha"

let anotherName = myName
anotherName = "chai"
console.log(anotherName);
console.log(myName);


let user1 = {
    email: "user@gmail.com",
    upi: "user@sbi",
}

let user2 = user1
user2.email = "deeksha@gmail.com"

console.log(user1.email);
console.log(user2.email);

