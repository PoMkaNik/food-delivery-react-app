import { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const cartCTX = useContext(CartContext);

  const numberOfCartItems = cartCTX.items.reduce(
    (total, item) => total + item.amount,
    0,
  );

  // animation
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const buttonClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ''
  }`;

  useEffect(() => {
    if (cartCTX.items.length === 0) return;
    // add additional class
    setBtnIsHighlighted(true);
    // remove class after animation ends
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      // in clear function clear the timer
      clearTimeout(timer);
    };
  }, [cartCTX.items]);
  // != animation

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
