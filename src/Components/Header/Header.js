import React from 'react';
import classes from './Header.module.sass';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '../Button/Button';
import { logout } from '../../Actions/auth';

const Header = ({ numItems, total, token, onLogout }) => {
  return (
    <header className={`${classes.Header} row`}>
      <Link to="/" className={`${classes.Logo} text-dark`}>
        Online Shop
      </Link>

      {token !== null ? (
        <div className={classes.Button}>
          <Button type="primary" onClick={onLogout}>
            Log out
          </Button>
        </div>
      ) : (
        <Link to="/login/" className={classes.ShoppingCart}>
          Log in
        </Link>
      )}

      <Link to="/cart/" className={classes.ShoppingCart}>
        <i className="cart-icon fa fa-shopping-cart" /> &nbsp;
        {numItems} items (${total})
      </Link>
    </header>
  );
};

const mapStateToProps = ({
  shoppingCart: { cartItems, orderTotal },
  auth: { token },
}) => ({
  total: orderTotal,
  numItems: cartItems.length,
  token,
});

const mapDispatchToProps = {
  onLogout: logout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
