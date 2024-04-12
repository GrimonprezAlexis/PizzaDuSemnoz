'use client';
import React from 'react';
import ProductTable from '../table/ProductTable';
import { useCafeuContext } from '@/context/CafeuContext';

const CartSection = () => {
  const { cart, removeFromCart } = useCafeuContext();
  return (
    <>
      <ProductTable array={cart} removeItem={removeFromCart} cartTable={true} />
    </>
  );
};

export default CartSection;
