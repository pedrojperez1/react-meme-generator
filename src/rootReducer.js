const INITIAL_STATE = { memes: [] }

function rootReducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD":
            return {...state, memes: [...state.memes, action.payload]}
        case "REMOVE":
            return {...state, memes: state.memes.filter(m => m.id !== action.payload)}
        default:
            return state
    }
}

export default rootReducer;