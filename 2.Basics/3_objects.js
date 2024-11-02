//singleton 
//object.create

//object literal

const mySym = Symbol("key1")

const JsUser =  {

    name: "deeksha",
    "full name": "Deeksha Sharma",
    [mySym]: "mykey1", // [] is used to refer as symbol
    age: 18,
    location: "jaipur",
    email: "deeksha@gmail.com",
    isLogin : false,
    lastLoginDays: ["Mon", " tues"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log( JsUser[mySym]);

JsUser.email= "deekshashar@gmaila.com"
//Object.freeze(JsUser);
JsUser.email = "deeksah@google.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());

console.log(JsUser.greetingTwo());