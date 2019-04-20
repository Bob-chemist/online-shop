const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      orderTotal: 0,
      cartItems: [],
    };
  }
  let cartItems = [];

  switch (action.type) {
    case 'BOOK_ADDED_TO_CART':
      let bookId = action.payload;
      cartItems = state.shoppingCart.cartItems.find(item => item.id === bookId)
        ? updateCartItem(state, bookId, 1)
        : addCartItem(state, bookId);
      break;

    case 'BOOK_DELETED_FROM_CART':
      bookId = action.payload;
      cartItems = deleteCartItem(state, bookId);
      break;

    case 'BOOK_DECREASED_IN_CART':
      bookId = action.payload;
      const book = state.shoppingCart.cartItems.find(
        item => item.id === bookId
      );
      cartItems =
        book.count === 1
          ? deleteCartItem(state, bookId)
          : updateCartItem(state, bookId, -1);
      break;

    default:
      cartItems = [...state.shoppingCart.cartItems];
      break;
  }
  console.log(cartItems);

  const orderTotal = !cartItems
    ? 0
    : cartItems.reduce((acc, { subtotal }) => {
        return acc + subtotal;
      }, 0);
  return { orderTotal, cartItems };
};

const deleteCartItem = ({ shoppingCart: { cartItems } }, bookId) => {
  const index = cartItems.findIndex(item => item.id === bookId);
  const newCart = [...cartItems.slice(0, index), ...cartItems.slice(index + 1)];
  return newCart;
};

const addCartItem = (state, bookId) => {
  const { id, title, price } = state.bookList.books.find(
    book => book.id === bookId
  );

  const newItem = {
    id,
    title,
    count: 1,
    subtotal: price,
  };

  return [...state.shoppingCart.cartItems, newItem];
};

const updateCartItem = ({ bookList, shoppingCart }, bookId, quantity) => {
  const { price } = bookList.books.find(book => book.id === bookId);
  const newCartItems = shoppingCart.cartItems.map(item => {
    if (item.id === bookId) {
      return {
        ...item,
        count: item.count + quantity,
        subtotal: item.subtotal + quantity * price,
      };
    }
    return { ...item };
  });
  return newCartItems;
};

export default updateShoppingCart;
