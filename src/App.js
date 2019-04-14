import React from 'react';
import { HomePage, CartPage } from './Pages';
import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header';

const App = () => {
  return (
    <main role="main" className="container">
      <Header numItems={5} total={120} />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route
          path="/cart/:id"
          render={({ match }) => <CartPage itemId={match.params.id} />}
        />
      </Switch>
    </main>
  );
};

export default App;
