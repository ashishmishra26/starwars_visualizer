const initState = {
    films: {},
    showList: 1,
    movieIndex: undefined
}
const rootReducer = (state = initState, action) => {
    if (action.type === 'ADD_FILMS') {
        return {
            ...state,
            films: action.films
        }
    } else if (action.type === 'TOGGLE_VISIBILITY') {
        return {
            ...state,
            showList: action.showList,
            movieIndex: action.movieIndex
        }
    }
    return state;
}
export default rootReducer;