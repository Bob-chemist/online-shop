import React, { Component } from 'react';
import BookListItem from './BookListItem';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classes from './BookList.module.sass';
import { withBookstoreService } from '../../hoc';
import { fetchBooks, bookAddedToCart } from '../../Actions';
import { compose } from '../../Utils';
import Loader from '../Loader';
import ErrorIndicator from '../ErrorIndicator';

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className={classes.BookList}>
      {books.map(book => {
        return (
          <li key={book.id}>
            <BookListItem
              book={book}
              onAddedToCart={() => onAddedToCart(book.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    console.log('booklist:', this.props);

    const { books, loading, error, onAddedToCart } = this.props;
    if (loading) return <Loader />;
    if (error) return <ErrorIndicator error={error} />;
    return <BookList books={books} onAddedToCart={onAddedToCart} />;
  }
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  return {
    books,
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return bindActionCreators(
    {
      fetchBooks: fetchBooks(bookstoreService),
      onAddedToCart: bookAddedToCart,
    },
    dispatch
  );
};

export default compose(
  withBookstoreService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(BookListContainer);
