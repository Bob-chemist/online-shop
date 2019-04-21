import React from 'react';
import classes from './BookListItem.module.sass';
import { Link } from 'react-router-dom';

const BookListItem = ({ book, onAddedToCart }) => {
  const { id, title, author, price, coverImage } = book;
  return (
    <div className={classes.BookListItem}>
      <div className={classes.BookCover}>
        <img src={coverImage} alt={title} />
      </div>
      <div className={classes.BookDetails}>
        <Link to={`details/${id}`} className={classes.BookTitle}>
          {title}
        </Link>
        <div className={classes.BookAuthor}>{author}</div>
        <div className={classes.BookPrice}>${price}</div>
        <button className={'btn btn-info add-to-cart'} onClick={onAddedToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default BookListItem;
