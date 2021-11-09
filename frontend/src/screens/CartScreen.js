import React from "react";
import { useLocation, useParams } from "react-router-dom";

const CartScreen = (props) => {
  const params = useParams();
  const location = useLocation();
  const productId = params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  console.log(productId);
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
