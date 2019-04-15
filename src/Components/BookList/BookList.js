import React, { Component } from 'react';
import BookListItem from './BookListItem';
import { connect } from 'react-redux';
import classes from './BookList.module.sass';
import { withBookstoreService } from '../../hoc';
import { fetchBooks } from '../../Actions';
import { compose } from '../../Utils';
import Loader from '../Loader';
import ErrorIndicator from '../ErrorIndicator';

const BookList = ({ books }) => {
  return (
    <ul className={classes.BookList}>
      {books.map(book => {
        return (
          <li key={book.id}>
            <BookListItem book={book} />
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
    const { books, loading, error } = this.props;
    if (loading) return <Loader />;
    if (error) return <ErrorIndicator error={error} />;
    return <BookList books={books} />;
  }
}

const mapStateToProps = ({ books, loading, error }) => {
  return {
    books,
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
  };
};

export default compose(
  withBookstoreService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(BookListContainer);
