function myPromise() {
    return new Promise((resolve, reject) => {
        resolve("promise fullfilled")
        // reject("promise not fullfilled")
    });
}

myPromise().then((item) => { // item has resolve content
    console.log(item);
})
    .catch((err) => { // err has error which comes from rejected promise
        console.log(err);

    })