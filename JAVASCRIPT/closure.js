function outerfunction(name) {
    return function innerfunction() {
        console.log(`My name is ${name}`);
    }
}
const data = outerfunction("Herika")
data()

function outerfunction()