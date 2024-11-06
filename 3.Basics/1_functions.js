function sayMyName(){
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("K");
    console.log("S");
    console.log("H");
    console.log("A");
}

//sayMyName();

// function add2Num(num1, num2){ //parameters - when we make the defination of function
//     console.log(num1+num2);
// }
function add2Num(num1, num2){ //parameters - when we make the defination of function
    // let result = num1+num2
    // return result
    // console.log("Hii");

    return num1+num2;
}
add2Num(3,4);// when we call the function - arguments
add2Num(3,"4");
add2Num(3, "a");
add2Num(3, null);

const result = add2Num(3,5);
//console.log("Result: " , result);

function loginUserMsg(username){ // or username="sam"
    //if(username === undefined){
    if(!username){
        console.log("Please enter a username.");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMsg());
// console.log(loginUserMsg("deeksha"));


function calculateCartPrice(...num1){ // ... are the rest operator
return num1
}
//console.log(calculateCartPrice(200,300,400,82,652));

const user = {
    username: "ff",
    price:133
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

//handleObject(user);

const myNewArray = [400,522,460,200]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
//console.log(returnSecondValue([200,400,782,60,741]));