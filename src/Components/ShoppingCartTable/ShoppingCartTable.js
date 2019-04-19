import React from 'react';
import classes from './ShoppingCartTable.module.sass';
import { connect } from 'react-redux';
import {
  bookAddedToCart,
  bookDeletedFromCart,
  bookDecreasedInCart,
} from '../../Actions';
import RenderRow from './RenderRow';

const ShoppingCartTable = ({
  cartItems,
  orderTotal,
  onAddedToCart,
  onDeletedFromCart,
  onDecreasedInCart,
}) => {
  return (
    <div className={classes.ShoppingCartTable}>
      <h2>Your order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {cartItems.map((item, index) => {
            return (
              <RenderRow
                key={index}
                item={item}
                index={index}
                onAddedToCart={() => onAddedToCart(item.id)}
                onDeletedFromCart={() => onDeletedFromCart(item.id)}
                onDecreasedInCart={() => onDecreasedInCart(item.id)}
              />
            );
          })}
        </tbody>
      </table>

      <div className={classes.Total}>Total: ${orderTotal}</div>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return {
    cartItems,
    orderTotal,
  };
};

const mapDispatchToProps = {
  onAddedToCart: bookAddedToCart,
  onDeletedFromCart: bookDeletedFromCart,
  onDecreasedInCart: bookDecreasedInCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCartTable);
