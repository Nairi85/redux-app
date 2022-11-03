import { createStore } from "redux"
const store = createStore(function (state, action) {
    switch (action.type) {
        case "changeName":
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    name: action.payload
                }
            }
        case "changeSurname":
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    surname: "Armani"
                }
            }
        default:
            return state
    }
}, {
    currentUser: {
        name: "",
        surname: ""
    }
}

)

export default store