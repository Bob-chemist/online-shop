import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from '../Components/Loader';
import ErrorIndicator from '../Components/ErrorIndicator';
import { withBookstoreService } from '../hoc';
import { fetchBooks, bookAddedToCart } from '../Actions';
import { compose } from '../Utils';
import { bindActionCreators } from 'redux';

class DetailsPage extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { match, books, loading, error, onAddedToCart } = this.props;
    const bookId = match.params.id;

    if (loading) return <Loader />;
    if (error) return <ErrorIndicator error={error} />;
    const { id, title, author, coverImage, isbn, price } = books.find(
      item => item.id === +bookId
    );
    return (
      <div>
        <img src={coverImage} alt={title} />
        <div>Title: {title}</div>
        <div>Author: {author}</div>
        <div>Price: ${price}</div>
        <div>ISBN: {isbn}</div>
        <button
          className={'btn btn-info add-to-cart'}
          onClick={() => onAddedToCart(id)}
        >
          Add to cart
        </button>
      </div>
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
