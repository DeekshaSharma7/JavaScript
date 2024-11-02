//const tinderUser = new Object() //Singleton object
const tinderUser = {} //Non-Singleton object

tinderUser.id = "125"
tinderUser.name = "deeksha"
tinderUser.isLogin = false
//console.log(tinderUser);

const regularUser = {
    email: "user1@gmail.com",
    fullname : {
        userfullname: {
            f_name: "deeksha",
            l_name: "sharma"
        }
    }
}

//console.log(regularUser.fullname.userfullname);
//console.log(regularUser.fullname.userfullname.f_name);

const ob1 = { 1: "a", 2: "b"}
const ob2 = {
    3: "a", 4: "b"
}

//const ob3 = {ob1, ob2}
// const ob3 = Object.assign({}, ob1, ob2);

const ob3  = {...ob1, ...ob2}
// console.log(ob3);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogin'));



const course = {
    courseName: "js",
    price : "999",
    courseInstructor:"deeksha"
}

//course.courseInstructor

const {courseInstructor: instructor} = course
console.log(instructor);