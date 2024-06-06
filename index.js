
 document.querySelector("#hireMe").addEventListener("submit", (event) => {
    
    event.target.innerHTML = `<span>Please wait this might take a few minutes</span> <div class="loader"></div> `
    ;
})

