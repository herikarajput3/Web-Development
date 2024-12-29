let userCount = 0
const userMethod = {
    describe: function () {
        return `My name is ${this.name}, My age is ${this.age}, and I'm from ${this.city}.`
    },
    greeting: function () {
        return `Hello, ${this.name}`
    }
}

function createUser(name, age, city) {
    const user = {}
    user.name = name
    user.age = age
    user.city = city
    user.describe = userMethod.describe
    user.greeting = userMethod.greeting
    userCount++
    return user;
}

const user1 = createUser("Herika", 20, "Ahmedabad")
const user2 = createUser("Trupti", 23, "Surat")
const user3 = createUser("Rutu", 21, "Mehsana")
const user4 = createUser("Sannu", 20, "Vadodara")
const user5 = createUser("Dhruvi", 22, "Rajkot")

console.log(user1.greeting());
console.log(user1.describe());
console.log(user2.describe());
console.log();
console.log(`Total number of user is ${userCount}.`);



