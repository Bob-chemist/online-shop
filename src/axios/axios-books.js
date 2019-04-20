import axios from 'axios';

export default axios.create({
  baseURL: 'https://book-store-a12f5.firebaseio.com/',
});
