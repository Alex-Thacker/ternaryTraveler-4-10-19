//fetch calls

export default {
    getInterests () {
        return fetch ("http://localhost:8088/interests?_expand=place")
        .then(r => r.json())
    },
    postInterest (interestObject) {
        return fetch("http://localhost:8088/interests", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(interestObject)
        }).then(r => r.json())
    }
}