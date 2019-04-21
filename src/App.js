import React from 'react';
import { HomePage, CartPage, DetailsPage } from './Pages';
import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header';

const App = () => {
  return (
    <main role="main" className="container">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/cart/" component={CartPage} />
        <Route path="/details/:id" component={DetailsPage} />
      </Switch>
    </main>
  );
};

export default App;
