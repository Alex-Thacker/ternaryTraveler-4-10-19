//event listeners.  DELETE- when user clicks delete, a alert message appears and when they click confirm, the insterest is deleted, if they click cancel then the alert goes away and interest isn't deleted. 
import apiManager from "./apiManager"
//postInterest
import displayInterest from "./displayInterest"
//displayInterest
import basicHTML from "./basicHTML"
//clearContainer
import editForm from "./editForm"
import interestForm from "./interestForm"


export default {
    handleSaveInterestButton () {
        let container = document.querySelector("#display-container")
        let displayInterestContainer = document.querySelector("#displayInterestDiv")
        let nameValue = document.querySelector("#nameInput").value
        let descriptionValue = document.querySelector("#descriptionInput").value
        let costValue = document.querySelector("#costInput").value
        let selectValue = document.querySelector("#dropDownSelect")
        let opt = selectValue.options[selectValue.selectedIndex].value
        console.log(opt)

        let interestObject = {
            name: nameValue,
            description: descriptionValue,
            cost: Number(costValue),
            review: "",
            placeId: Number(opt)
        }

        apiManager.postInterest(interestObject)
            .then(() => {
                basicHTML.clearContainer(displayInterestContainer)
                container.appendChild(displayInterest.displayInterest())
            })
    },
    handleEditButton () {
        editForm.createEditForm(event)

    },
    handleSaveEditButton () {
        let container = document.querySelector("#display-container")
        let eventContainer = event.target.parentNode
        let singleId = eventContainer.id.split("--")[1]
        
        let costValue = document.querySelector(`#costInput--${singleId}`).value
        let reviewValue = document.querySelector(`#reviewInput--${singleId}`).value

        let editObject = {
            cost: Number(costValue),
            review: reviewValue
        }
        console.log(editObject)
        apiManager.patchInterest(singleId, editObject)
        .then(() => {
            basicHTML.clearContainer(container)
            container.appendChild(interestForm.createForm())
            container.appendChild(displayInterest.displayInterest())
        })
    },
    handleDeleteButton () {
        let container = document.querySelector("#display-container")
        let eventContainer = event.target.parentNode
        let singleId = eventContainer.id.split("--")[1]

        if (window.confirm("Are you sure you want to delete?")) {
            apiManager.deleteInterest(singleId)
            .then(() => {
                basicHTML.clearContainer(container)
                container.appendChild(interestForm.createForm())
                container.appendChild(displayInterest.displayInterest())
            })
        }
    },
    handleNewLocationButton () {
        let container = document.querySelector("#display-container")
        let prompt = window.prompt("New location name?")

        if (prompt !== null){
            let placeObject = {
                name: prompt,
                visa_required: false
            }
            
            apiManager.postPlace(placeObject)
            .then(() => {
                basicHTML.clearContainer(container)
                container.appendChild(interestForm.createForm())
                container.appendChild(displayInterest.displayInterest())
            })
            
        }

    }
}


// "id": 1,
// "placeId": 3,
// "name": "A wall",
// "description": "a wall, cool i guess",
// "cost": 0.00,
// "review": ""

// "id": 1,
// "name": "London",
// "visa_required": false