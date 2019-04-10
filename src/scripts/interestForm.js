//form to display on dom when user opens app. they will input things for new point of interest. NAME, DESCRIPTION, COST, DROPDOWN OF PLACES

import basicHTML from "./basicHTML"
//createElement
//clearContainer
import eventHandler from "./eventHandler"
//handleSaveInterestButton
import apiManager from "./apiManager"

export default {
    createForm () {
        let formFragment = document.createDocumentFragment()
        let outerDiv = basicHTML.createElement("div", "outerDiv")

        let nameLabel = basicHTML.createElement("label",undefined, "Name: ")
        let nameInput = basicHTML.createElement("input", "nameInput")

        outerDiv.appendChild(nameLabel)
        outerDiv.appendChild(nameInput)

        let descriptionLabel = basicHTML.createElement("label", undefined, "Description: ")
        let descriptionInput = basicHTML.createElement("input", "descriptionInput")

        outerDiv.appendChild(descriptionLabel)
        outerDiv.appendChild(descriptionInput)
        
        let costLabel = basicHTML.createElement("label", undefined, "Cost: ")
        let costInput = basicHTML.createElement("input", "costInput")
        costInput.type = "number"

        outerDiv.appendChild(costLabel)
        outerDiv.appendChild(costInput)

        let dropDownLabel = basicHTML.createElement("label", undefined, "Location: ")
        outerDiv.appendChild(dropDownLabel)

        let dropDownSelect = basicHTML.createElement("select", "dropDownSelect")

        apiManager.getPlace()
            .then(response => {
                response.forEach(object => {
                    let newOption = basicHTML.createElement("option", undefined, object.name)
                    newOption.value = object.id
                    dropDownSelect.appendChild(newOption)
                })
            })

        outerDiv.appendChild(dropDownSelect)

        let hr1 = basicHTML.createElement("hr")
        outerDiv.appendChild(hr1)

        let saveInterestButton = basicHTML.createElement("button", "saveInterestButton", "Save interest")
        outerDiv.appendChild(saveInterestButton)

        let addNewLocationButton = basicHTML.createElement("button", "addNewLocationButton", "Add New Location")
        outerDiv.appendChild(addNewLocationButton)

        let hr = basicHTML.createElement("hr")
        outerDiv.appendChild(hr)

        addNewLocationButton.addEventListener("click", () => {
            eventHandler.handleNewLocationButton()
        })

        saveInterestButton.addEventListener("click", () => {
            eventHandler.handleSaveInterestButton()
        })

        formFragment.appendChild(outerDiv)

        return formFragment
    }   
}