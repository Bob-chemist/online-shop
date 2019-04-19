import React from 'react';
import BookListContainer from '../Components/BookList';
import ShoppingCartTable from '../Components/ShoppingCartTable';

const HomePage = () => {
  return (
    <div>
      <BookListContainer />
      <ShoppingCartTable />
    </div>
  );
};

export default HomePage;
