// const user1 = {
//     name: "Herika",
//     age: 22,
//     about: function () {
//         console.log(this.name, this.age)
//     }
// }
// user1.about()

// STEP-2 => creating a method inside a constructor
// function createUser(name, age) {
//     const user = {}
//     user.name = name
//     user.age = age
//     user.about = function(){
//         return `My name is ${this.name} and my age is ${this.age}.`
//     }
//     return user
// }

// const user1 = createUser("Herika", 20)
// const user2 = createUser("Trupti", 22)

// console.log(user1.about());
// console.log(user2);

//STEP-4

// const userMethod = {
//     about: function () {
//         return `My name is ${this.name} and my age is ${this.age}.`
//     }
// }

// function createUser(name, age) {
//     const user = Object.create(userMethod)
//     user.name = name
//     user.age = age
//     // user.about = userMethod.about
//     return user
// }

// const user1 = createUser("Herika", 20)
// // console.log(user1.about());
// console.log(user1);

// const user2 = createUser("Trupti",23)
// console.log(user2.about());

// STEP-5

// function createUser(name, age){
//     const user = Object.create(createUser.prototype)
//     user.name = name;
//     user.age = age;
//     return user;
// }

// createUser.prototype.about = function(){
//     return `My name is ${this.name} and my age is ${this.age}`
// }

// const user1 = createUser("Herika",20)
// console.log(user1);
// console.log(user1.about());

// STEP-6 NEW keyword

// function CreateUser(name, age) {
//     this.name = name;
//     this.age = age;
// }

// CreateUser.prototype.about = function () {
//     return `My name is ${this.name} and my age is ${this.age}`
// }

// const user1 = new CreateUser("Herika", 20)
// console.log(user1);
// console.log(user1.about());

// STEP-7 CLASS

class CreateUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    about() {
        return `My name is ${this.name} and my age is ${this.age}`;
    }
}

const user1 = new CreateUser("Herika", 20)
console.log(user1);
console.log(user1.about());