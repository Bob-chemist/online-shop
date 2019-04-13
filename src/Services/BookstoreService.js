export default class BookstoreService {
  getBooks() {
    return [
      {
        id: 1,
        title: 'The Hobbit',
        author: 'John Ronald Reuel Tolkien',
      },
      {
        id: 2,
        title: 'George and the Big Bang',
        author: 'Lucy Hawking',
      },
    ];
  }
}
