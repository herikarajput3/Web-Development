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

user1.about();

// If we don't write this keyword we get error as it is not able to find fname and lname.
// this keyword gives the reference of the object.





