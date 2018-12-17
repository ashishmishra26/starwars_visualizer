const initState = {
    films: {},
    showList: 1,
    movieIndex: 0
}
const rootReducer = (state = initState, action) => {
    if (action.type === 'ADD_FILMS') {
        return {
            ...state,
            films: action.films
        }
    } else if (action.type === 'TOGGLE_VISIBILITY') {
        console.log(action);
        return {
            ...state,
            showList: action.showList,
            movieIndex: action.movieIndex
        }
    }
    return state;
}
export default rootReducer;