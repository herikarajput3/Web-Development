// 1) method to create any object
const myObj = {
    name: "Herika",
    age: 20
}

// console.log(myObj.name);

// const keyValue = "email"
// myObj[keyValue] = "abc@gmail.com"

// console.log(myObj);

// 2) method to create any object 

let object = {}
object.firstName = "herika";
// console.log(object);

// 3) method to create any object

let obj = Object.create(myObj)
obj.fname = "herika";
obj.lname = "rajput";

// console.log(obj);

// There are 2 types of prototype: 1) for passing reference 2) free gift wtih function

const user1 = {
    fname: "Herika",
    lname: "Rajput",
    about: function () {
        console.log(`My name is ${this.fname} ${this.lname}`);
    }
}

// user1.about();

// If we don't write this keyword we get error as it is not able to find fname and lname.
// this keyword gives the reference of the object.

// another way to print data

// console.log(user1["fname"]);

// To make 100 users we have to make 100 objects so that to simplify it we make a function and return object in it.

// function userData(fname, lname) {
//     const userObj = {}
//     userObj.fname = fname;
//     userObj.lname = lname;
//     userObj.about = function () {
//         console.log(`My name is ${this.fname} ${this.lname}`);
//     }
//     return userObj;
// }

// const herika = userData("Herika","Rajput");
// herika.about();

// In above example we have to create function each time when we call the userData function

// const userMethod = {
//     about: function () {
//         console.log(`My name is ${this.fname} ${this.lname}`);
//     },
//     hobbies: function () {
//         console.log(`My name is ${this.fname} and my hobby is ${this.hobby}`);
//     }
// }

// function userData(fname, lname, hobby) {
//     const userObj = {}
//     userObj.fname = fname;
//     userObj.lname = lname;
//     userObj.hobby = hobby;
//     userObj.about = userMethod.about
//     userObj.hobbies = userMethod.hobbies
//     return userObj;
// }

// const herika = userData("Herika", "Rajput", "reading");
// herika.about();
// herika.hobbies();

// Now we will use prototype of function which act as a object.

function userData(fname, lname, hobby) {
    const userObj = {}
    userObj.fname = fname;
    userObj.lname = lname;
    userObj.hobby = hobby;
    userObj.about = userData.prototype.about
    userObj.hobbies = userData.prototype.hobbies
    return userObj;
}

userData.prototype.about = function () {
    console.log(`My name is ${this.fname} ${this.lname}`);
}

userData.prototype.hobbies = function () {
    console.log(`My name is ${this.fname} and my hobby is ${this.hobby}`);
}

const herika = userData("Herika", "Rajput", "reading");
herika.about();
herika.hobbies();
