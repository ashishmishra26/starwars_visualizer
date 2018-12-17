export const toggleListVisibility = (showList, movieIndex) => {
    return {
        type: 'TOGGLE_VISIBILITY',
        showList,
        movieIndex,
    };
}