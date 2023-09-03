import React from 'react';
import { useSelector } from 'react-redux';
import CartPage from './CartPage';

const CartItems = () => {
  const cartItems = useSelector((state) => state.CartReducer.carts);

  return (
    <div>
      <h1>Cart Items</h1>
      {cartItems.map((item) => (
        <CartPage
          imgurl={item.imgurl}
          title={item.title.slice(0,40)}
          des={item.des}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default CartItems;
