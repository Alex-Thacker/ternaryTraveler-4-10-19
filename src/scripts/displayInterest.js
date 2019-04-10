//display points of interest when user first opens app

import apiManager from "./apiManager"
//getInterests
import basicHTML from "./basicHTML"
//createElement
//clearContainer

export default {
    displayInterest () {
        let displayInterestDiv = basicHTML.createElement("div", "displayInterestDiv")
        apiManager.getInterests()
        .then(response => {
            response.forEach(object => {
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