// Dates

let myDate = Date()
console.log(myDate);
//console.log(myDate.toString);
// console.log(myDate.toDateString());
//console.log(myDate.toLocalString());
console.log(typeof myDate);

//let myCreatedDate = new Date(2024, 1,10, 5, 3);  // when this format follow then, month starts with 00(Jan)
let myCreatedDate = new Date("2024-01-18") //// when this format follow then, month starts with 01(Jan)
//console.log(myCreatedDate);
//console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);

// console.log(myCreatedDate.getDate());
// console.log(myCreatedDate.getTime());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


newDate.toLocaleDateString('default', {
    weekday: "long",
})