import React from 'react';
import { withBookstoreService } from '../hoc';

const CartPage = ({ bookstoreService, itemId }) => {
  const [book] = bookstoreService.getBooks().filter(item => {
    return item.id === +itemId;
  });

  return <div>{`${book.author}`}</div>;
};

export default withBookstoreService()(CartPage);
