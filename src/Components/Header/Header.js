import React from 'react';
import classes from './Header.module.sass';
import { Link } from 'react-router-dom';

const Header = ({ numItems, total }) => {
  return (
    <header className={`${classes.Header} row`}>
      <Link to="/" className={`${classes.Logo} text-dark`}>
        Online Shop
      </Link>
      <Link to="/cart/" className={classes.ShoppingCart}>
        <i className="cart-icon fa fa-shopping-cart" /> &nbsp;
        {numItems} items (${total})
      </Link>
    </header>
  );
};

export default Header;