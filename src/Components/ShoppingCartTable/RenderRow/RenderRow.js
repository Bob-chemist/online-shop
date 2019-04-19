import React from 'react';
//import classes from './RenderRow.module.sass';

const RenderRow = ({
  item,
  index,
  onAddedToCart,
  onDeletedFromCart,
  onDecreasedInCart,
}) => {
  const { id, title, count, subtotal } = item;
  return (
    <tr key={id}>
      <td>{index + 1}</td>
      <td>{title}</td>
      <td>{count}</td>
      <td>${subtotal}</td>
      <td>
        <button
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeletedFromCart}
        >
          <i className="fa fa-trash-o" />
        </button>
        <button
          className="btn btn-outline-success btn-sm float-right"
          onClick={onAddedToCart}
        >
          <i className="fa fa-plus-circle" />
        </button>
        <button
          className="btn btn-outline-warning btn-sm float-right"
          onClick={onDecreasedInCart}
        >
          <i className="fa fa-minus-circle" />
        </button>
      </td>
    </tr>
  );
};
export default RenderRow;
