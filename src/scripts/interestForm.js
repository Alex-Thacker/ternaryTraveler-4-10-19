//form to display on dom when user opens app. they will input things for new point of interest. NAME, DESCRIPTION, COST, DROPDOWN OF PLACES

import basicHTML from "./basicHTML"
//createElement
//clearContainer
import eventHandler from "./eventHandler"
//handleSaveInterestButton

export default {
    createForm () {
        let formFragment = document.createDocumentFragment()

        let nameLabel = basicHTML.createElement("label",undefined, "Name: ")
        let nameInput = basicHTML.createElement("input", "nameInput")

        formFragment.appendChild(nameLabel)
        formFragment.appendChild(nameInput)

        let descriptionLabel = basicHTML.createElement("label", undefined, "Description: ")
        let descriptionInput = basicHTML.createElement("input", "descriptionInput")

        formFragment.appendChild(descriptionLabel)
        formFragment.appendChild(descriptionInput)
        
        let costLabel = basicHTML.createElement("label", undefined, "Cost: ")
        let costInput = basicHTML.createElement("input", "costInput")
        costInput.type = "number"

        formFragment.appendChild(costLabel)
        formFragment.appendChild(costInput)

        let dropDownLabel = basicHTML.createElement("label", undefined, "Location: ")
        formFragment.appendChild(dropDownLabel)

        let dropDownSelect = basicHTML.createElement("select", "dropDownSelect")

        // let blankOption = basicHTML.createElement("option", "blankOption", "")
        // dropDownSelect.appendChild(blankOption)

        let londonOption = basicHTML.createElement("option", "londonOption", "London")
        londonOption.value = 1
        dropDownSelect.appendChild(londonOption)

        let parisOption = basicHTML.createElement("option", "parisOption", "Paris")
        parisOption.value = 2
        dropDownSelect.appendChild(parisOption)

        let berlinOption = basicHTML.createElement("option", "berlinOption", "Berlin")
        berlinOption.value = 3
        dropDownSelect.appendChild(berlinOption)

        formFragment.appendChild(dropDownSelect)

        let saveInterestButton = basicHTML.createElement("button", "saveInterestButton", "Save interest")
        formFragment.appendChild(saveInterestButton)

        saveInterestButton.addEventListener("click", () => {
            eventHandler.handleSaveInterestButton()
        })

        return formFragment
    }   
}