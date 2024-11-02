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
console.log("Result: " , result);