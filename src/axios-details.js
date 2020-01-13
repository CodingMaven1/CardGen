import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'https://giftcard-2e628.firebaseio.com/'
});

export default instance;