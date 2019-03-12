import axios from 'axios';

const KEY = 'AIzaSyChcZCjuS2QTnVKdvh8ApaZpJE9scdqSog';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
