import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cart-slice";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const dispacth = useDispatch();
  const { title, quantity, price } = props.item;
  const total = quantity * price;

  const increaseHandler = () => {
    dispacth(cartActions.add(props.item));
  };

  const decreaseHandler = () => {
    dispacth(cartActions.remove(props.item));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseHandler}>-</button>
          <button onClick={increaseHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
