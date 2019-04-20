import axios from '../axios/axios-books';

export default class BookstoreService {
  getBooks = async () => {
    const response = await axios.get('books.json');
    return response.data;
  };
}
