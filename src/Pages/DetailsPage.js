import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from '../Components/Loader';
import ErrorIndicator from '../Components/ErrorIndicator';
import { withBookstoreService } from '../hoc';
import { fetchBooks, bookAddedToCart } from '../Actions';
import { compose } from '../Utils';
import { bindActionCreators } from 'redux';
import BookDetails from '../Components/BookDetails';

class DetailsPage extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { match, books, loading, error, onAddedToCart } = this.props;
    const bookId = match.params.id;

    if (loading) return <Loader />;
    if (error) return <ErrorIndicator error={error} />;
    const book = books.find(item => item.id === +bookId);
    return (
      <BookDetails book={book} onAddedToCart={() => onAddedToCart(book)} />
    );
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
)(DetailsPage);
