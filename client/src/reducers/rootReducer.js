const initState = {
    films: {}
}
const rootReducer = (state = initState, action) => {
    if (action.type === 'ADD_FILMS') {
        return {
            ...state,
            films: action.films
        }
    }
    return state;
}
export default rootReducer;