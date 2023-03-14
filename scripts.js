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

    document.querySelector("#randomUserForm").addEventListener("submit", function(e) {
        // tell the form not to refresh the page when the submit button is clicked
        e.preventDefault()
        // fetch the data from the api
        const numberOfUsers = document.querySelector("#numberInput").value
        const randomUserUrl = "https://randomuser.me/api?results=" + numberOfUsers
        // https://www.google.com/search?q=mango
        fetch(randomUserUrl)
            .then(rawResponse => rawResponse.json()) // convert to json with an 'implicit return' arrow function
            .then(jsonData => {
                console.log(jsonData.results[0].name)
                const ul = document.querySelector("#randomUserList")
                // clear out the unordered list before we populate it with new data
                console.dir(ul)
                while(ul.firstChild) {
                    ul.removeChild(ul.firstChild)
                }
                jsonData.results.forEach(result => {
                    // 1. create the new li elements
                    const li = document.createElement("li")
                    // 2. change their properties
                    li.innerText = `${result.name.title} ${result.name.first} ${result.name.last}`
                    // 3. append them to the DOM
                    ul.append(li)
                })
            })
            .catch(console.warn)
    })

})