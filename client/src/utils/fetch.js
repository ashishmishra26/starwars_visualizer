import axios from 'axios';

function fetchdata(url) {
    return axios.get(url)
        .then(response => {
            return response;
        })
        .catch(error => {
            console.log('Error fetching data', error);
            return null;
        });
}

export default fetchdata;