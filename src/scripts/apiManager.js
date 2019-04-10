//fetch calls

export default {
    getInterests () {
        return fetch ("http://localhost:8088/interests")
        .then(r => r.json())
    }
}