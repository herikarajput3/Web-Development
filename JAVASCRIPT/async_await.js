const url = "https://jsonplaceholder.org/users";

// If we don't use aysnc & await we get pending as a result so that we use to load all data from api then the next line of code executes
// const result = fetch(url);
// console.log(result);

// Async Await

async function getData() {
    // We use await so the we don't have to use .then() twice to get data
    const result = await fetch(url);
    const data = await result.json();

    data.forEach(element => {
        console.log(element.firstname + " "+ element.lastname);
        
    });
}

getData();