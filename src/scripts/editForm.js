//form that appears when user tries to edit a point of interest. COST, REVIEW

import basicHTML from "./basicHTML"
//createElement
//clearContainer
import apiManager from "./apiManager"
//postInterest
//getInterests
import eventHandler from "./eventHandler"

export default {
    createEditForm (event) {
        let editFragment = document.createDocumentFragment()
        let container = event.target.parentNode
        basicHTML.clearContainer(container)
        let singleId = container.id.split("--")[1]

        apiManager.getOneInterest(singleId)
        .then(response => {
            console.log(response)
            let costLabel = basicHTML.createElement("label", undefined, "New Cost: ")
            let costInput = basicHTML.createElement("input", `costInput--${response.id}`)
            costInput.value = response.cost
            editFragment.appendChild(costLabel)
            editFragment.appendChild(costInput)

            let reviewLabel = basicHTML.createElement("label", undefined, "New Review: ")
            let reviewInput = basicHTML.createElement("input", `reviewInput--${response.id}`)
            reviewInput.value = response.review
            editFragment.appendChild(reviewLabel)
            editFragment.appendChild(reviewInput)

            let saveEditButton = basicHTML.createElement("button", `saveEditButton--${response.id}`, "Save Changes")
            editFragment.appendChild(saveEditButton)
            saveEditButton.addEventListener("click", () => {
                eventHandler.handleSaveEditButton()
            })

            container.appendChild(editFragment)
        })
    }
}