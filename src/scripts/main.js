import basicHTML from "./basicHTML"
//createElement
//clearContainer
import interestForm from "./interestForm"
//createForm
import displayInterest from "./displayInterest"
//displayInterest



let container = document.querySelector("#display-container")

container.appendChild(interestForm.createForm())

container.appendChild(displayInterest.displayInterest())
// console.log(container)

// container.appendChild(basicHTML.createElement("p", "p", "test"))

// console.log("hi")


// basicHTML.clearContainer(container)