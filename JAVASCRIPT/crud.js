var newStudent = [{
    "name": "John",
    "age": 21,
    "nationality": "Spanish"
}];

localStorage.setItem("students", JSON.stringify(newStudent));


// Retrieve the object from storage to add a new student
var retrievedObject = localStorage.getItem("students");
var stored = JSON.parse(retrievedObject);

// add a new student
var newStudent2 = [{
    "name": "Mary",
    "age": 20,
    "nationality": "German"
}];
var stored = Object.assign(stored, newStudent2);

// Update the storage
localStorage.setItem("students", JSON.stringify(stored));
var result = localStorage.getItem("students");

console.log(result);