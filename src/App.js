import React from 'react';
import { connect } from 'react-redux';

import { HomePage, CartPage, DetailsPage, LoginPage } from './Pages';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Header from './Components/Header';

const App = props => {
  return (
    <main role="main" className="container">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/cart/" component={CartPage} />
        <Route path="/details/:id" component={DetailsPage} />
        <Route
          path={'/login'}
          render={() =>
            !props.loggedIn ? <LoginPage /> : <Redirect to={'/'} />
          }
        />
      </Switch>
    </main>
  );
};

function mapStateToProps(state) {
  return {
    loggedIn: state.auth.token,
  };
}

export default withRouter(connect(mapStateToProps)(App));
