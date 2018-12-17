export const addFilms = () => {
    let filmsData = {};
    return function (dispatch) {
        return fetch('https://www.swapi.co/api/films')
        .then(response => response.json())
        .then(response => {
            let films = response.results,
                updatedFilms = films;
            films.forEach(function (film, indexOfFilm) {
                for (let key in film) {
                    if (film[key] instanceof Array) {
                        let arrayProperty = film[key];
                        arrayProperty.forEach(function (valueOfProp, indexOfProp) {
                            fetch(valueOfProp).then(response => response.json()).then(function (result) {
                                updatedFilms[indexOfFilm][key][indexOfProp] = result;
                            });
                        });
                    }
                }
            });
            filmsData = {
                results: updatedFilms
            };
            dispatch({
                type: 'ADD_FILMS',
                films: filmsData,
            });
        })
        .catch(error => {
            console.log('Error fetching data', error);
        });
    }
}