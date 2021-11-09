import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { addToCart } from "../actions/cartActions";
import { useDispatch } from "react-redux";
const CartScreen = (props) => {
  const params = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const productId = params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  return (
    <div>
      <h1> Cart Screen</h1>
      <p>
        {" "}
        ADD TO CART : ProdutID: {productId} Qty: {qty}
      </p>
    </div>
  );
};

export default CartScreen;
