import React from 'react';

const CartContext = React.createContext({
  // defaults are not required here
  // but better for IDE intellisense
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
