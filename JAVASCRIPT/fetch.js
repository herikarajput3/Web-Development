fetch("https://jsonplaceholder.org/users")
    // .then((items) => {
    //     return items.json();
    // })
    // .then((items) => {
    //     // items.map((ele)=>{
    //     //     console.log(ele.firstname, ele.lastname);

    //     // })

    //     items.forEach(element => {
    //         console.log(element.firstname, element.lastname);

    //     });
    // })

    .then((res) => res.json())
    .then(items => items.forEach(element => {
        console.log(element.firstname, element.lastname);
    }))