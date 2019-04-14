import React from 'react';
import BookList from '../Components/BookList';
import ShoppingCartTable from '../Components/ShoppingCartTable';

const HomePage = () => {
  return (
    <div>
      <BookList />
      <ShoppingCartTable />
    </div>
  );
};

export default HomePage;
