import { useContext } from "react";

import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const cartItems = cartCtx.items.map((item) => {
    return <CartItem key={item.name} item={item} />;
  });

  return (
    <Modal onClick={props.dissmissHandler}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes["total"]}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes["actions"]}>
        <button
          className={classes["button--alt"]}
          onClick={props.dissmissHandler}
        >
          Close
        </button>
        <button className={classes["button"]} onClick={props.onShowCheckout}>
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
