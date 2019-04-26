const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST',
  };
};

const booksLoaded = newBooks => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks,
  };
};

const booksError = error => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error,
  };
};

const bookAddedToCart = book => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: book,
  };
};

const bookDecreasedInCart = book => {
  return {
    type: 'BOOK_DECREASED_IN_CART',
    payload: book,
  };
};

const bookDeletedFromCart = book => {
  return {
    type: 'BOOK_DELETED_FROM_CART',
    payload: book,
  };
};

const fetchBooks = bookstoreService => () => dispatch => {
  dispatch(booksRequested());
  bookstoreService
    .getBooks()
    .then(data => dispatch(booksLoaded(data)))
    .catch(e => dispatch(booksError(e)));
};

export {
  fetchBooks,
  bookAddedToCart,
  bookDeletedFromCart,
  bookDecreasedInCart,
};
