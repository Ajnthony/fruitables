import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';

const CartScreen = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Your cart is empty.</h1>
    </div>
  );
};

export default CartScreen;
