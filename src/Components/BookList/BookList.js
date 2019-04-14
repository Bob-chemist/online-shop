import React, { Component } from 'react';
import BookListItem from './BookListItem';
import { connect } from 'react-redux';
import classes from './BookList.module.sass';
import { withBookstoreService } from '../../hoc';
import { booksLoaded, booksRequested, booksError } from '../../Actions';
import { compose } from '../../Utils';
import Loader from '../Loader';
import ErrorIndicator from '../ErrorIndicator';

class BookList extends Component {
  componentDidMount() {
    const {
      bookstoreService,
      booksLoaded,
      booksRequested,
      booksError,
    } = this.props;
    booksRequested();
    bookstoreService
      .getBooks()
      .then(data => booksLoaded(data))
      .catch(e => booksError(e));
  }

  render() {
    const { books, loading, error } = this.props;
    if (loading) return <Loader />;
    if (error) return <ErrorIndicator error={error} />;
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
  }
}

const mapStateToProps = ({ books, loading, error }) => {
  return {
    books,
    loading,
    error,
  };
};

const mapDispatchToProps = {
  booksLoaded,
  booksRequested,
  booksError,
};

export default compose(
  withBookstoreService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(BookList);
