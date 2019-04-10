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
    },
    getOneInterest (id) {
        return fetch (`http://localhost:8088/interests/${id}`)
        .then(r => r.json())
    },
    patchInterest (id, interestObject) {
        return fetch(`http://localhost:8088/interests/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(interestObject)
        }).then(r => r.json())
    },
    deleteInterest (id) {
        return fetch (`http://localhost:8088/interests/${id}`, {
            method: "DELETE"
        })
    },
    postPlace (object) {
        return fetch("http://localhost:8088/places", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(object)
        }).then(r => r.json())
    },
    getPlace () {
        return fetch ("http://localhost:8088/places")
        .then(r => r.json())
    }

    
}