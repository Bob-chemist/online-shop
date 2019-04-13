import React from 'react';
import { withBookstoreService } from './hoc';

const App = ({ bookstoreService }) => {
  return <div />;
};

export default withBookstoreService()(App);
