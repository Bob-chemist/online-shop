const initialState = {
  orderTotal: 0,
  cartItems: [],
};

const updateShoppingCart = (state = initialState, action) => {
  let book = action.payload;
  switch (action.type) {
    case 'BOOK_ADDED_TO_CART':
      let cartItems = state.cartItems.find(item => item.id === book.id)
        ? updateCartItem(state.cartItems, book.id, 1)
        : addCartItem(state.cartItems, book);
      return { cartItems, orderTotal: orderTotal(cartItems) };

    case 'BOOK_DELETED_FROM_CART':
      cartItems = deleteCartItem(state, book.id);
      return { cartItems, orderTotal: orderTotal(cartItems) };

    case 'BOOK_DECREASED_IN_CART':
      const books = state.cartItems.find(item => item.id === book.id);
      cartItems =
        books.count === 1
          ? deleteCartItem(state, book.id)
          : updateCartItem(state.cartItems, book.id, -1);
      return { cartItems, orderTotal: orderTotal(cartItems) };

    default:
      return state;
  }
};

const orderTotal = arr => {
  return arr.reduce((acc, { count, price }) => acc + count * price, 0);
};

const deleteCartItem = ({ cartItems }, bookId) => {
  const index = cartItems.findIndex(item => item.id === bookId);
  const newCart = [...cartItems.slice(0, index), ...cartItems.slice(index + 1)];
  return newCart;
};

const addCartItem = (arr, book) => {
  const { id, title, price } = book;
  const newItem = {
    id,
    title,
    count: 1,
    price,
  };
  return [...arr, newItem];
};

const updateCartItem = (arr, id, quantity) => {
  return arr.map(item => {
    if (item.id === id) {
      return {
        ...item,
        count: item.count + quantity,
      };
    }
    return { ...item };
  });
};

export default updateShoppingCart;
