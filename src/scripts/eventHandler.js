//event listeners.  DELETE- when user clicks delete, a alert message appears and when they click confirm, the insterest is deleted, if they click cancel then the alert goes away and interest isn't deleted. 
import apiManager from "./apiManager"
//postInterest
import displayInterest from "./displayInterest"
//displayInterest
import basicHTML from "./basicHTML"
//clearContainer


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
    }
}


// "id": 1,
// "placeId": 3,
// "name": "A wall",
// "description": "a wall, cool i guess",
// "cost": 0.00,
// "review": ""