import { useContext } from "react";

import classes from "./CartItem.module.css";
import CartContext from "../../store/cart-context";

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.item.price.toFixed(2)}`;

  const increaseAmountHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const decreaseAmountHandler = (id) => {
    cartCtx.removeItem(id);
  };

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.item.name}</h2>
        <div className={classes["summary"]}>
          <span className={classes["price"]}>{price}</span>
          <span className={classes["amount"]}>{props.item.amount}</span>
        </div>
      </div>
      <div className={classes["actions"]}>
        <button onClick={() => decreaseAmountHandler(props.item.id)}>-</button>
        <button onClick={() => increaseAmountHandler(props.item)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
