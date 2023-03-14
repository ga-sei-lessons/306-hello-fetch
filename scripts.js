document.addEventListener("DOMContentLoaded", function() {
    // using DOMContentLoaded to wait for the html DOM to load (instead of defer)
    // window.fetch() aka fetch(url) returns Promise
    const url = "https://swapi.dev/api/films"
    fetch(url) // returns a Promise and we can use 'dot then' to define a function that will run when we hear back from the server
        .then(function(rawResponseData) {
            // console.log('raw response', rawResponseData.body)
            return rawResponseData.json() // part of how fetch works
        }) // .then takes a callback function
        .then(function(jsonData) {
            // write some code that will add this data from the api to our website
            // console.log(jsonData.results[0])
            const movie = jsonData.results[0]
            const body = document.querySelector("body")
            // three steps to adding dom elements with js
            // 1. create the elements
            const h2 = document.createElement("h2")
            const p = document.createElement("p")
            // 2. set the new element's properties
            h2.innerText = movie.title
            p.innerText = movie.opening_crawl
            // 3. append the new elements to the dom
            body.append(h2, p) // now the can 👀
        })
        .catch(console.warn) // some code to run if an error occurs

        const randomUserUrl = "https://randomuser.me/api"
        fetch(randomUserUrl)
            .then(rawResponse => rawResponse.json()) // convert to json with an 'implicit return' arrow function
            .then(jsonData => {
                console.log(jsonData.results)
            })
            .catch(console.warn)

})