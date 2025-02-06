function normalFunc(name, reading) {
    console.log(`My name is ${name}`);
    reading();
}

// function reading() {
//     console.log("Reading books");
// }

normalFunc("Herika", () => { // Here we pass function as an argument which is called callback function 
    console.log("Reading books");
});