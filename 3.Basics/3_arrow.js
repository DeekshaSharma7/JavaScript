const user = {
    username : "deeksha",
    price: 999,

    welcomeMessage: function( ){
        console.log(`${this.username}, welcome to website`); //this => refer the current context
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "sa,"
// user.welcomeMessage()

//console.log(this)

// function chai(){
//     let username = "deeksha"
//     console.log(this);
//     console.log(this.username);
// }
// chai()


// const chai = function(){
//     let username ="deeksha"
//     console.log(this.username);
// }

const chai= ()=>{
    let username = "deeksha"
//    console.log(this);
// console.log(this.username);
}
chai()


// const addTwo = (num1, num2) => {// explicit return
//     return num1+num2;
// }



//const addTwo = (num1, num2) =>  num1+num2; //inplicit return
//const addTwo = (num1, num2) => ( num1+num2);
const addTwo = (num1, num2) => ({username: "hitesh"})
console.log(addTwo(3,4))

