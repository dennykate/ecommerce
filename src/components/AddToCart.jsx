import React from "react";
import { useSelector } from "react-redux";

const AddToCart = () => {
  const { quantity } = useSelector((state) => state.cart);

  return <div>{quantity}</div>;
};

export default AddToCart;
