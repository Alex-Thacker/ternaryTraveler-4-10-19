//display points of interest when user first opens app

import apiManager from "./apiManager"
//getInterests
import basicHTML from "./basicHTML"
//createElement
//clearContainer
import eventHandler from "./eventHandler"
//handleEditButton

export default {
    displayInterest () {
        let displayInterestDiv = basicHTML.createElement("div", "displayInterestDiv")
        apiManager.getInterests()
        .then(response => {
            response.forEach(object => {
                // console.log(object)
                let innerDiv = basicHTML.createElement("div", `innerDiv--${object.id}`)
                let nameInterest = basicHTML.createElement("h1", undefined, `Name of Interest: ${object.name}`)
                innerDiv.appendChild(nameInterest)

                let descriptionInterest = basicHTML.createElement("p", undefined, `Description of Interest: ${object.description}`)
                innerDiv.appendChild(descriptionInterest)

                let costInterest = basicHTML.createElement("p", undefined, `Cost of Interest: $${object.cost}`)
                innerDiv.appendChild(costInterest)

                if (object.review !== "") {
                    let reviewInterest = basicHTML.createElement("p", undefined, `Review of Interest: ${object.review}`)
                    innerDiv.appendChild(reviewInterest)
                }

                let locatedInterest = basicHTML.createElement("p", undefined, `Location of Interest: ${object.place.name}`)
                innerDiv.appendChild(locatedInterest)

                let editInterestButton = basicHTML.createElement("button", `editButton--${object.id}`, "Edit")
                innerDiv.appendChild(editInterestButton)
                editInterestButton.addEventListener("click", (event) => {
                    eventHandler.handleEditButton(event)
                })

                let deleteInterestButton = basicHTML.createElement("button", `deleteButton--${object.id}`, "Delete")
                innerDiv.appendChild(deleteInterestButton)
                deleteInterestButton.addEventListener("click", () => {
                    eventHandler.handleDeleteButton()
                })

                displayInterestDiv.appendChild(innerDiv)
            })
        })
        return displayInterestDiv
    }
}


// "id": 1,
// "placeId": 3,
// "name": "A wall",
// "description": "a wall, cool i guess",
// "cost": 0.00,
// "review": ""