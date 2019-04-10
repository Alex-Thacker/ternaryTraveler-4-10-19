import basicHTML from "./basicHTML"
//createElement
//clearContainer

import interestForm from "./interestForm"
//createForm

let container = document.querySelector("#display-container")

container.appendChild(interestForm.createForm())
// console.log(container)

// container.appendChild(basicHTML.createElement("p", "p", "test"))

// console.log("hi")


// basicHTML.clearContainer(container)