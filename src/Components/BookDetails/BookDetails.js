import React from 'react';
import classes from './BookDetails.module.sass';

const BookDetails = props => {
  const {
    book: { coverImage, title, author, price, isbn, review },
    onAddedToCart,
  } = props;
  return (
    <div className={classes.BookDetails}>
      <div className={classes.BookInfo}>
        <h2>{title}</h2>
        <div className={classes.BookCover}>
          <img src={coverImage} alt={title} />
        </div>
        <div>Author: {author}</div>
        <div>Price: ${price}</div>
        <div>ISBN: {isbn}</div>
        <button className={'btn btn-info add-to-cart'} onClick={onAddedToCart}>
          Add to cart
        </button>
      </div>

      <div className={classes.BookReview}>
        <h2>Review</h2>
        <p>{review}</p>
      </div>
    </div>
  );
};

export default BookDetails;
