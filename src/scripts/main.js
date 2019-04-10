import interestForm from "./interestForm"
//createForm
import displayInterest from "./displayInterest"
//displayInterest

let container = document.querySelector("#display-container")
container.appendChild(interestForm.createForm())
container.appendChild(displayInterest.displayInterest())