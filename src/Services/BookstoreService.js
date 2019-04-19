export default class BookstoreService {
  data = [
    {
      id: 1,
      title: 'The Hobbit',
      author: 'John Ronald Reuel Tolkien',
      price: 25,
      coverImage:
        'https://ozon-st.cdn.ngenix.net/multimedia/c350/1010987045.jpg',
    },
    {
      id: 2,
      title: 'George and the Big Bang',
      author: 'Lucy Hawking',
      price: 45,
      coverImage:
        'https://ozon-st.cdn.ngenix.net/multimedia/c350/1014689782.jpg',
    },
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.9
          ? reject(new Error('This is planned error!'))
          : resolve(this.data);
      }, 500);
    });
  }
}
